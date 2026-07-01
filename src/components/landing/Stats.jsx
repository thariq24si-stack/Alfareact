export default function Stats() {

  const stats = [
    {
      number: "5.000+",
      title: "Pasien"
    },
    {
      number: "12",
      title: "Dokter"
    },
    {
      number: "10+",
      title: "Tahun Pengalaman"
    },
    {
      number: "98%",
      title: "Kepuasan Pasien"
    }
  ];

  return (
    <section className="bg-blue-600 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {stats.map((item,index)=>(
            <div key={index}>

              <h2 className="text-5xl font-bold text-white">
                {item.number}
              </h2>

              <p className="text-blue-100 mt-3">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}