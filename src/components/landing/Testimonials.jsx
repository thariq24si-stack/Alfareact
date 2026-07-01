export default function Testimonials() {

  const reviews = [
    {
      name: "Rina",
      review:
        "Pelayanannya sangat ramah, kliniknya bersih, dan dokternya profesional."
    },
    {
      name: "Budi",
      review:
        "Cabut gigi tidak sakit sama sekali. Sangat direkomendasikan!"
    },
    {
      name: "Salsa",
      review:
        "Booking mudah dan prosesnya cepat. Sangat puas."
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-12">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item,index)=>(
            <div
              key={index}
              className="bg-gray-100 rounded-3xl p-8"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h4 className="font-bold mt-6">
                {item.name}
              </h4>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}