import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 bg-blue-600">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Ready To Take Care Of Your Smile?
        </h2>

        <p className="text-blue-100 mt-5 mb-10">
          Jadwalkan konsultasi bersama dokter gigi profesional kami sekarang juga.
        </p>

        <Link
          to="/login"
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Appointment
        </Link>

      </div>

    </section>
  );
}