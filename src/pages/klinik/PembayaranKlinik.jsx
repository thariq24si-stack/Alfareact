import { useState } from "react";

import { FaMoneyBillWave, FaWhatsapp, FaGift, FaWallet } from "react-icons/fa";
import { dataTransaksi, dataPasien, getTotalPoinPasien } from "../../data/KlinikData";

export default function PembayaranKlinik() {
  const [transaksi] = useState(dataTransaksi);

  const sendInvoice = (t) => {
    const pasien = dataPasien.find(p => p.id === t.pasienId);
    const invoiceMsg = `🧾 *Kwitansi Digital*\n\nTerima kasih ${t.pasien}\nTindakan: ${t.tindakan}\nTotal: Rp ${t.total.toLocaleString()}\nStatus: ${t.status}\nPoin: ${t.poin}\n\nPoin Anda sekarang: ${getTotalPoinPasien(t.pasienId)}`;
    alert(`📱 Kwitansi dikirim ke ${pasien?.phone || "WA pasien"}:\n${invoiceMsg}`);
  };

  const totalPendapatan = transaksi.reduce((sum, t) => sum + t.total, 0);
  const totalPoin = transaksi.reduce((sum, t) => sum + t.poin, 0);

  const statsCards = [
    { title: "Total Pendapatan", value: `Rp ${(totalPendapatan / 1000000).toFixed(1)}M`, icon: FaWallet, gradient: "from-[#9FB2C8] to-[#7A8DA3]" },
    { title: "Total Poin", value: `${totalPoin} poin`, icon: FaGift, gradient: "from-[#8BA3C4] to-[#6B8DA8]" },
    { title: "Total Transaksi", value: `${transaksi.length}`, icon: FaMoneyBillWave, gradient: "from-[#7A9CBF] to-[#5A7D9F]" },
  ];

  return (
    <div>
      {/* Header Gradasi */}
      <div className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] rounded-xl p-6 mb-6 text-white">
        <h1 className="text-2xl font-bold">Pembayaran & Transaksi</h1>
        <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
          <span>Home</span>
          <span>/</span>
          <span>Pembayaran</span>
        </div>
      </div>

      {/* Stats Cards Gradasi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {statsCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className={`bg-gradient-to-br ${card.gradient} rounded-xl p-5 text-white shadow-lg`}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold">{card.value}</p>
                  <p className="text-sm text-white/80 mt-1">{card.title}</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon className="text-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabel Transaksi - Header Gradasi */}
      <div className="bg-white rounded-xl border border-[#D9DEE3] overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white">
            <tr>
              <th className="p-3 text-left">ID Transaksi</th>
              <th className="p-3 text-left">Pasien</th>
              <th className="p-3 text-left">Tindakan</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Poin</th>
              <th className="p-3 text-left">Tanggal</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((t) => (
              <tr key={t.id} className="border-t border-[#D9DEE3] hover:bg-[#F5F7FA]">
                <td className="p-3 font-mono text-sm">{t.id}</td>
                <td className="p-3">{t.pasien}</td>
                <td className="p-3">{t.tindakan}</td>
                <td className="p-3">Rp {t.total.toLocaleString()}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs text-white ${t.status === 'lunas' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                    {t.status === 'lunas' ? 'Lunas' : 'Cicil'}
                  </span>
                </td>
                <td className="p-3">{t.poin}</td>
                <td className="p-3">{t.tanggal}</td>
                <td className="p-3">
                  <button onClick={() => sendInvoice(t)} className="text-[#9FB2C8] hover:text-[#7A8DA3] flex items-center gap-1">
                    <FaWhatsapp /> Kirim
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Program Loyalitas - Gradasi */}
      <div className="mt-6 bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] rounded-xl p-5 text-white">
        <h3 className="font-semibold flex items-center"><FaGift className="mr-2" /> 🎁 Program Loyalitas (MA)</h3>
        <p className="text-sm mt-1 text-white/90">Setiap transaksi otomatis mengakumulasi poin. Tukarkan poin Anda untuk diskon layanan berikutnya!</p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm bg-white/20 rounded-lg p-3">
          <div>🥉 Bronze: 100 poin → Diskon 10%</div>
          <div>🥈 Silver: 300 poin → Diskon 20%</div>
          <div>🥇 Gold: 500 poin → Gratis scaling 1x</div>
        </div>
      </div>
    </div>
  );
}