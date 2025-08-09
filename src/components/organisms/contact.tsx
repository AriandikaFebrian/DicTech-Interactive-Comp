'use client';

import React, { useState, useRef } from "react";
import { TextField, Button, FormControlLabel, Checkbox, CircularProgress } from '@mui/material';
import PageLayout from "../layouts/pagelayout";
import ReCAPTCHA from "react-google-recaptcha";
import CountUp from "react-countup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Impor style Toastify
import { FaAward, FaBusinessTime, FaProjectDiagram, FaSmile } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);  // <-- state checkbox TOC
  const [isLoading, setIsLoading] = useState(false);  // <-- state loading spinner
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);  // Show loading spinner

    if (!captchaValue) {
      toast.error("Please verify that you are not a robot.");
      setIsLoading(false); // Stop loading spinner
      return;
    }

    if (!agreed) {
      toast.error("You must agree to the Terms and Conditions before submitting.");
      setIsLoading(false); // Stop loading spinner
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        recaptchaRef.current?.reset();
        setCaptchaValue(null);
        setAgreed(false); // Reset checkbox after form submission
      } else {
        const errorMessage = await response.text();
        toast.error(`Failed to send message: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("There was an error sending your message. Please try again later.");
    }

    setIsLoading(false); // Hide loading spinner after process
  };

  return (
    <PageLayout title="Our Contact" subtitle="Let’s connect and grow your business together.">
      <div className="mt-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">


  {/* Formulir Kontak */}
  <form onSubmit={handleSubmit} className="md:col-span-1">
    <h3 className="text-4xl font-bold text-black">Contact Us</h3>
    <p className="mt-4 text-gray-700 dark:text-black-300">
      Get in touch with us to discover how our services can help your business thrive in today’s digital landscape.
    </p>

    <hr className="my-6 border-t-6 w-30 border-teal-600" />

    {/* Form Fields */}
    <TextField
      label="Name"
      variant="outlined"
      fullWidth
      margin="normal"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />

    <div className="flex gap-2">
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        margin="normal"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>

    <TextField
      label="Message"
      variant="outlined"
      fullWidth
      margin="normal"
      name="message"
      value={formData.message}
      onChange={handleChange}
      multiline
      rows={4}
      required
    />

    {/* Checkbox Terms of Conditions */}
    <FormControlLabel
      control={
        <Checkbox
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          color="primary"
          required
          sx={{
            '&.Mui-checked': {
              color: '#14b8a6', // teal-600 dalam hex
            }
          }}
        />
      }
      label={
        <>
          I agree to the{" "}
          <a
            href="/policy/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline hover:text-teal-600"
          >
            Terms and Services
          </a>
        </>
      }
    />

    {/* reCAPTCHA */}
    <div>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        onChange={(token) => setCaptchaValue(token)}
        ref={recaptchaRef}
        className="cursor-pointer"
      />
    </div>

    {/* Submit Button */}
   <Button
  type="submit"
  variant="contained"
  disabled={isLoading}
  sx={{
    borderRadius: 0,  // Menghilangkan rounded
    mt: 2,  // Menambahkan margin atas
    backgroundColor: '#009689',  // Warna latar belakang teal-600
    '&:hover': {
      backgroundColor: '#00BBA7',  // Warna latar belakang saat hover teal-500
    },
  }}
>
  {isLoading ? (
    <CircularProgress size={24} color="primary" />
  ) : (
    "Send Message"
  )}
</Button>

  </form>

  {/* Statistik Perusahaan */}
  <div className="md:col-span-2">
    <h2 className="text-2xl font-semibold text-black mb-6">Our Achievements</h2>

    <div className="grid grid-cols-2 gap-6 text-center">
      <div className="flex flex-col items-center gap-2 border border-teal-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <FaSmile className="text-teal-600 text-5xl" />
        <p className="text-4xl font-bold text-teal-600">
          <CountUp end={10} duration={2} />+
        </p>
        <p className="text-gray-700">Happy Clients</p>
      </div>
      <div className="flex flex-col items-center gap-2 border border-teal-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <FaProjectDiagram className="text-teal-600 text-5xl" />
        <p className="text-4xl font-bold text-teal-600">
          <CountUp end={50} duration={2} />+
        </p>
        <p className="text-gray-700">Projects Completed</p>
      </div>
      <div className="flex flex-col items-center gap-2 border border-teal-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <FaAward className="text-teal-600 text-5xl animate-pulse" />
        <p className="text-xl font-semibold text-teal-600">Coming Soon</p>
        <p className="text-gray-700">Awards & Certificates</p>
      </div>
      <div className="flex flex-col items-center gap-2 border border-teal-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <FaBusinessTime className="text-teal-600 text-5xl" />
        <p className="text-4xl font-bold text-teal-600">
          <CountUp end={1} duration={2} />
        </p>
        <p className="text-gray-700">Years in Business</p>
      </div>
    </div>

    <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold text-teal-600 mb-4">We&apos;re Remote, But Always Here for You</h3>
      <p className="text-gray-700 mb-4">
        Our team works remotely across different time zones to provide you the best service possible.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
        <div>
          <h4 className="font-semibold text-teal-600">Support Hours</h4>
          <p className="text-gray-700">Mon - Fri, 9 AM - 6 PM (GMT+7)</p>
        </div>
        <div>
          <h4 className="font-semibold text-teal-600">Connect with Us</h4>
          <p>
            <a href="https://slack.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline mr-3">Slack</a>
            <a href="https://discord.gg/yourcompany" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline mr-3">Discord</a>
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">Twitter</a>
          </p>
        </div>
      </div>

      <p className="text-gray-700 mb-6 max-w-lg mx-auto">
        We embrace remote work culture — flexible, collaborative, and driven by passion. Interested in joining our team or partnering with us? Let’s chat!
      </p>

      <a
        href="/careers"
        className="inline-block bg-teal-600 text-white px-6 py-2 font-semibold hover:bg-teal-500 transition-colors duration-300"
      >
        Join Our Team
      </a>
    </div>
  </div>
      </div>

      {/* Toast Container to display notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
    </PageLayout>
  );
}
