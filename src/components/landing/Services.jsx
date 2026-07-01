import {
  Stethoscope,
  Sparkles,
  Smile,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope size={40} />,
    title: "Scaling Gigi",
    description:
      "Membersihkan karang gigi untuk menjaga kesehatan gusi dan mulut.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "Bleaching",
    description:
      "Memutihkan gigi dengan teknologi modern yang aman dan nyaman.",
  },
  {
    icon: <Smile size={40} />,
    title: "Pemasangan Behel",
    description:
      "Merapikan susunan gigi agar lebih sehat dan meningkatkan rasa percaya diri.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Pemeriksaan Gigi",
    description:
      "Konsultasi dan pemeriksaan rutin bersama dokter gigi profesional.",
  },
];

function Services() {
  return (
    <section id="layanan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Layanan Kami
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Pelayanan Terbaik Untuk Senyum Anda
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Klinik Gigi Permata menyediakan berbagai layanan kesehatan
            gigi dengan dokter berpengalaman dan teknologi modern.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto group-hover:bg-blue-600 group-hover:text-white transition">

                {item.icon}

              </div>

              <h3 className="text-xl font-bold mt-6 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;