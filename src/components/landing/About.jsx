import { Award, HeartHandshake, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">
            Your Trusted Dental Clinic
          </h2>

          <p className="text-gray-600 leading-8">
            Klinik Gigi Permata hadir untuk memberikan pelayanan kesehatan gigi
            yang profesional, nyaman, dan terpercaya. Kami menggunakan teknologi
            modern serta tenaga medis yang berpengalaman untuk memberikan
            perawatan terbaik bagi setiap pasien.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex gap-4">
              <ShieldCheck className="text-blue-600" size={28}/>
              <div>
                <h4 className="font-semibold">
                  Pelayanan Terpercaya
                </h4>
                <p className="text-gray-500 text-sm">
                  Dokter profesional dan peralatan modern.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Award className="text-blue-600" size={28}/>
              <div>
                <h4 className="font-semibold">
                  Berpengalaman
                </h4>
                <p className="text-gray-500 text-sm">
                  Melayani ribuan pasien sejak berdiri.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <HeartHandshake className="text-blue-600" size={28}/>
              <div>
                <h4 className="font-semibold">
                  Pasien Prioritas Kami
                </h4>
                <p className="text-gray-500 text-sm">
                  Kepuasan dan kenyamanan pasien adalah tujuan utama kami.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900"
            alt="Dental Clinic"
            className="rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}