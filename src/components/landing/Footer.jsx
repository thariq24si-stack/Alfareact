import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-slate-900 text-white pt-16 pb-10"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">

        <div>

          <h2 className="text-2xl font-bold">
            Klinik Gigi Permata
          </h2>

          <p className="text-gray-300 mt-5 leading-7">
            Memberikan pelayanan kesehatan gigi terbaik
            dengan dokter profesional dan fasilitas modern.
          </p>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Kontak
          </h3>

          <div className="space-y-4">

            <div className="flex gap-3">
              <MapPin size={20} />
              <span>Jl. Soekarno Hatta, Pekanbaru</span>
            </div>

            <div className="flex gap-3">
              <Phone size={20} />
              <span>0812-3456-7890</span>
            </div>

            <div className="flex gap-3">
              <Mail size={20} />
              <span>info@klinikpermata.com</span>
            </div>

          </div>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Jam Operasional
          </h3>

          <p>Senin - Jumat</p>
          <p>08.00 - 20.00 WIB</p>

          <p className="mt-4">
            Sabtu
          </p>

          <p>08.00 - 17.00 WIB</p>

        </div>

      </div>

      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 Klinik Gigi Permata. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;