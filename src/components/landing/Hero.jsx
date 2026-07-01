function Hero() {
  return (
    <section
      id="home"
      className="pt-36 pb-24 bg-gradient-to-r from-blue-50 to-cyan-100"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Kiri */}
        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Klinik Gigi Terpercaya
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight text-gray-800">
            Senyum Sehat
            <br />
            Dimulai Dari
            <span className="text-blue-600">
              {" "}Perawatan Terbaik
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Klinik Gigi Permata menyediakan layanan kesehatan gigi
            profesional dengan dokter berpengalaman serta peralatan
            modern untuk memberikan pelayanan terbaik kepada pasien.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
              Buat Janji
            </button>

            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition">
              Hubungi Kami
            </button>

          </div>

        </div>

        {/* Kanan */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700"
            alt="Dokter Gigi"
            className="rounded-3xl shadow-xl w-full max-w-md"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;