import { useParams } from "react-router-dom";
import { dataPasien } from "../../data/KlinikData";

export default function PasienDetail() {
  const { id } = useParams();

  const pasien = dataPasien.find(
    (item) => item.id == id
  );

  if (!pasien) {
    return (
      <div className="p-6 text-red-500">
        Pasien tidak ditemukan
      </div>
    );
  }

  return (
    <div className="p-6 flex justify-center">

      <div className="bg-white rounded-2xl shadow-lg w-[420px] p-6">

        {/* HEADER */}
        <div className="flex flex-col items-center mb-5">

          <div className="w-24 h-24 rounded-full bg-hijau text-white flex items-center justify-center text-3xl font-bold mb-3">
            {pasien.nama.charAt(0)}
          </div>

          <h1 className="text-2xl font-bold">
            {pasien.nama}
          </h1>

          <p className="text-gray-500">
            Patient ID: #{pasien.id}
          </p>

        </div>

        {/* DETAIL */}
        <div className="space-y-4">

          <div className="border-b pb-2">
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="font-medium">
              {pasien.email}
            </p>
          </div>

          <div className="border-b pb-2">
            <p className="text-sm text-gray-500">
              Phone
            </p>

            <p className="font-medium">
              {pasien.phone}
            </p>
          </div>

          <div className="border-b pb-2">
            <p className="text-sm text-gray-500">
              Riwayat Perawatan
            </p>

            <p className="font-medium">
              {pasien.riwayat}
            </p>
          </div>

          <div className="border-b pb-2">
            <p className="text-sm text-gray-500">
              Loyalitas
            </p>

            <p
              className={
                pasien.loyalitas === "Gold"
                  ? "text-yellow-500 font-bold"
                  : pasien.loyalitas === "Silver"
                  ? "text-gray-500 font-bold"
                  : "text-orange-500 font-bold"
              }
            >
              {pasien.loyalitas}
            </p>
          </div>

          <div className="border-b pb-2">
            <p className="text-sm text-gray-500">
              Last Visit
            </p>

            <p className="font-medium">
              {pasien.lastVisit}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Poin Loyalitas
            </p>

            <p className="text-2xl font-bold text-hijau">
              {pasien.poin} Points
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}