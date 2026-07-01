export default function Doctors() {
  const doctors = [
    {
      name: "drg. Amanda Putri",
      specialist: "Orthodontist",
      image: "https://i.pravatar.cc/300?img=32",
    },
    {
      name: "drg. Rizky Pratama",
      specialist: "Dental Surgeon",
      image: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "drg. Citra Lestari",
      specialist: "Cosmetic Dentist",
      image: "https://i.pravatar.cc/300?img=47",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          Meet Our Doctors
        </h2>

        <p className="text-gray-500 text-center mb-14">
          Tim dokter profesional yang siap memberikan pelayanan terbaik.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 mt-2">
                  {doctor.specialist}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}