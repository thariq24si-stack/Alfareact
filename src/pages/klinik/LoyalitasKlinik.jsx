import { useState } from "react";
import { FaGift, FaTrophy, FaMedal, FaRocket, FaWhatsapp } from "react-icons/fa";
import { dataPasien, dataRekomendasi, getTotalPoinPasien } from "../../data/KlinikData";

export default function LoyalitasKlinik() {
  const [pasien] = useState(dataPasien);
  const [rekomendasi] = useState(dataRekomendasi);

  const sendRecommendation = (p, rekom) => {
    const message = `🎁 *Rekomendasi Layanan Personal*\n\nHalo ${p.nama},\n\nBerdasarkan riwayat perawatan Anda, kami merekomendasikan:\n✨ *${rekom.rekomendasi}*\n📝 Alasan: ${rekom.alasan}\n\nManfaatkan poin loyalitas Anda (${getTotalPoinPasien(p.id)} poin) untuk diskon spesial!`;
    alert(`📱 Rekomendasi dikirim ke ${p.phone || "WA pasien"}:\n${message}`);
  };

  const getTierInfo = (poin) => {
    if (poin >= 500) return { tier: "Gold", color: "from-yellow-500 to-yellow-600", icon: FaTrophy, diskon: "30%", benefit: "Gratis scaling 1x" };
    if (poin >= 300) return { tier: "Silver", color: "from-gray-400 to-gray-500", icon: FaMedal, diskon: "20%", benefit: "Diskon 20% semua layanan" };
    return { tier: "Bronze", color: "from-orange-500 to-orange-600", icon: FaMedal, diskon: "10%", benefit: "Diskon 10%" };
  };

  const triggerCampaign = (type) => {
    const messages = {
      birthday: "🎂 Selamat Ulang Tahun! Dapatkan diskon 25% untuk layanan apapun bulan ini!",
      scalingReminder: "🦷 6 bulan pasca scaling Anda! Waktunya perawatan rutin. Booking sekarang!",
      tierUp: "🎉 Selamat! Poin Anda naik tier. Nikmati benefit lebih eksklusif!"
    };
    alert(`📢 Kampanye Trigger: ${messages[type]}`);
  };

  return (
    <div>
      {/* Header Gradasi */}
      <div className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] rounded-xl p-6 mb-6 text-white">
        <h1 className="text-2xl font-bold">Program Loyalitas & Marketing Otomatis</h1>
        <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
          <span>Home</span>
          <span>/</span>
          <span>Loyalitas</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tabel Poin Pasien */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#D9DEE3] overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white">
              <tr>
                <th className="p-3 text-left">Pasien</th>
                <th className="p-3 text-left">Poin</th>
                <th className="p-3 text-left">Tier</th>
                <th className="p-3 text-left">Benefit</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pasien.map((p) => {
                const poin = getTotalPoinPasien(p.id);
                const tierInfo = getTierInfo(poin);
                const TierIcon = tierInfo.icon;
                const rekom = rekomendasi.find(r => r.pasienId === p.id);
                return (
                  <tr key={p.id} className="border-t border-[#D9DEE3] hover:bg-[#F5F7FA]">
                    <td className="p-3">{p.nama}</td>
                    <td className="p-3 font-bold">{poin}</td>
                    <td className="p-3">
                      <span className={`bg-gradient-to-r ${tierInfo.color} text-white px-2 py-1 rounded text-xs flex items-center gap-1 w-fit`}>
                        <TierIcon /> {tierInfo.tier}
                      </span>
                    </td>
                    <td className="p-3 text-sm">{tierInfo.benefit}</td>
                    <td className="p-3">
                      {rekom && (
                        <button onClick={() => sendRecommendation(p, rekom)} className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                          <FaWhatsapp className="text-xs" /> Kirim
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Trigger Marketing */}
        <div className="bg-white rounded-xl border border-[#D9DEE3] p-5">
          <h3 className="font-semibold mb-4 flex items-center text-[#1A1A1A]">
            <FaRocket className="mr-2 text-[#9FB2C8]" /> 🎯 Trigger Marketing
          </h3>
          <div className="space-y-3">
            <button onClick={() => triggerCampaign("birthday")} className="w-full text-left border-l-4 border-pink-500 pl-3 py-2 hover:bg-[#F5F7FA] rounded">
              <p className="font-medium text-[#1A1A1A]">🎂 Ulang Tahun Pasien</p>
              <p className="text-xs text-[#7A8DA3]">Diskon 25% otomatis</p>
            </button>
            <button onClick={() => triggerCampaign("scalingReminder")} className="w-full text-left border-l-4 border-[#9FB2C8] pl-3 py-2 hover:bg-[#F5F7FA] rounded">
              <p className="font-medium text-[#1A1A1A]">🦷 6 Bulan Pasca Scaling</p>
              <p className="text-xs text-[#7A8DA3]">Reminder kontrol + promo</p>
            </button>
            <button onClick={() => triggerCampaign("tierUp")} className="w-full text-left border-l-4 border-yellow-500 pl-3 py-2 hover:bg-[#F5F7FA] rounded">
              <p className="font-medium text-[#1A1A1A]">🎁 Akumulasi Poin Tier Up</p>
              <p className="text-xs text-[#7A8DA3]">Notifikasi naik tier</p>
            </button>
          </div>
        </div>
      </div>

      {/* Rekomendasi Personal - Gradasi */}
      <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-[#9FB2C8]/30">
        <h3 className="font-semibold mb-3 flex items-center text-[#1A1A1A]">
          <FaGift className="mr-2 text-purple-500" /> 🤖 Rekomendasi Layanan Personal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rekomendasi.map((r) => {
            const pasienData = pasien.find(p => p.id === r.pasienId);
            return (
              <div key={r.id} className="bg-white rounded-xl p-4 shadow-sm">
                <p className="font-medium text-[#9FB2C8]">{r.pasien}</p>
                <p className="text-sm font-semibold mt-1 text-[#1A1A1A]">✨ {r.rekomendasi}</p>
                <p className="text-xs text-[#7A8DA3] mt-1">📝 {r.alasan}</p>
                <button onClick={() => sendRecommendation(pasienData, r)} className="mt-3 bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                  <FaWhatsapp /> Kirim ke Pasien
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tier Benefits */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white text-center">
          <FaMedal className="text-3xl mx-auto mb-2" />
          <p className="font-bold">Bronze</p>
          <p className="text-sm">100 poin</p>
          <p className="text-xs opacity-90">Diskon 10%</p>
        </div>
        <div className="bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl p-4 text-white text-center">
          <FaMedal className="text-3xl mx-auto mb-2" />
          <p className="font-bold">Silver</p>
          <p className="text-sm">300 poin</p>
          <p className="text-xs opacity-90">Diskon 20%</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white text-center">
          <FaTrophy className="text-3xl mx-auto mb-2" />
          <p className="font-bold">Gold</p>
          <p className="text-sm">500 poin</p>
          <p className="text-xs opacity-90">Gratis scaling</p>
        </div>
      </div>
    </div>
  );
}