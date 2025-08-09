import Link from "next/link";

interface Service {
  id: string;
  title: string;
  desc: string;
  href: string;
}

type OtherServicesProps = {
  currentId: string;
  services: Service[];
};

export default function OtherServices({ currentId, services }: OtherServicesProps) {
  const filtered = services.filter(service => service.id !== currentId);

  return (
    <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Judul utama */}
<h3 className="text-md text-gray-600 text-center uppercase tracking-wide">Other Services</h3>
<p className="text-3xl font-semibold text-gray-900 text-center mb-2">
  Discover More Ways We Can Support Your Business
</p>
<hr className="my-4 border-t-4 w-20 mx-auto border-teal-600" />
<p className="text-gray-600 mb-8 text-center max-w-xl mx-auto leading-relaxed">
  Explore our additional services designed to complement your needs and help your business thrive.
</p>

      {/* Grid layanan */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.map(({ id, title, desc, href }, idx) => {
          const isWhiteBg = idx % 4 === 0 || idx % 4 === 2;
          const bgColor = isWhiteBg ? "bg-white/10 text-black" : "bg-teal-600 text-white";

          return (
            <div
              key={id}
              className={`${bgColor} p-8 shadow min-h-[220px] border border-white/30 transition-colors duration-300 flex flex-col justify-between
                ${isWhiteBg ? "" : "hover:bg-black/90"}
              `}
            >
              <div>
                <h4 className="text-xl font-semibold mb-3">{title}</h4>
                <p className="text-sm leading-relaxed">{desc}</p>
              </div>
              <Link
                href={href}
                className={`mt-6 inline-block text-sm underline relative
                  ${isWhiteBg ? "text-black" : "text-white"}
                  after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current
                  hover:after:w-full after:transition-all after:duration-300 after:ease-in-out w-fit
                `}
              >
                Read More →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
