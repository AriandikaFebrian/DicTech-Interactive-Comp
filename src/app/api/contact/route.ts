import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MIN_MESSAGE_LENGTH = 30;
const SPAM_KEYWORDS = ["buy now", "free", "click here", "subscribe", "visit", "offer"];
const MAX_LINKS = 2;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function containsSpamKeywords(text: string) {
  const lower = text.toLowerCase();
  return SPAM_KEYWORDS.some((keyword) => lower.includes(keyword));
}

function countLinks(text: string) {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const matches = text.match(urlRegex);
  return matches ? matches.length : 0;
}

function cleanSnippet(text: string, maxLength = 60) {
  let clean = text.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
  if (clean.length > maxLength) {
    clean = clean.slice(0, maxLength).trim() + "...";
  }
  return clean || "No description";
}

export async function POST(req: Request) {
  const { email, phone, message } = await req.json(); // Ambil phone dari request body
  const timestamp = new Date();
  const formattedTimestamp = timestamp.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  // Validasi dan filter spam
  if (!message || message.trim().length < MIN_MESSAGE_LENGTH) {
    return new Response("Message too short", { status: 400 });
  }

  if (containsSpamKeywords(message)) {
    return new Response("Spam keywords detected", { status: 400 });
  }

  if (countLinks(message) > MAX_LINKS) {
    return new Response("Too many links", { status: 400 });
  }

  if (email && !isValidEmail(email)) {
    return new Response("Invalid email format", { status: 400 });
  }

  const issueSnippet = cleanSnippet(message);

  // Kirim ke admin via Resend
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ariandika1913@gmail.com",
      subject: `New Contact Message from ${email || "Anonymous User"}: ${issueSnippet}`,
      replyTo: email || "no-reply@dictechinteractive.com",
      text: `
New contact message from DicTech Interactive

From: ${email || "Anonymous User"}
Phone: ${phone || "Not provided"}
Time: ${formattedTimestamp}

----------------------------------------
${message}
----------------------------------------
      `,
      html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="margin-bottom: 0.5rem;">📬 New Contact Message</h2>
  
  <table style="font-size: 14px; margin-bottom: 1rem;">
    <tr><td><strong>From:</strong></td><td>${email || "Anonymous User"}</td></tr>
    <tr><td><strong>Phone:</strong></td><td>${phone || "Not provided"}</td></tr>
    <tr><td><strong>Time:</strong></td><td>${formattedTimestamp}</td></tr>
  </table>

  <div style="margin-bottom: 1rem;">
    <strong>Message:</strong>
    <pre style="background: #f9f9f9; padding: 1rem; border: 1px solid #e1e1e1; white-space: pre-wrap; font-family: inherit; border-radius: 4px;">
${message}
    </pre>
  </div>

  <hr style="margin-top: 2rem;" />
  <p style="font-size: 12px; color: #888;">
    This message was sent from <strong>DicTech Interactive</strong> contact form.
  </p>
</div>
      `,
    });
  } catch (error) {
    console.error("Resend failed:", error);
    return new Response("Error sending contact message", { status: 500 });
  }

  return new Response("OK");
}
