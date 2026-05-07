import { useState } from "react";
import { FaCalendarAlt, FaClock, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { dataJadwal, dataPasien } from "../../data/KlinikData";

export default function JadwalKlinik() {
  const [jadwal, setJadwal] = useState(dataJadwal);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const sendReminder = (jadwalItem, method = "whatsapp") => {
    const pasien = dataPasien.find(p => p.id === jadwalItem.pasienId);
    const message = `🔔 Reminder Jadwal Kontrol\n\nHalo ${jadwalItem.pasien},\nJadwal ${jadwalItem.tindakan} Anda besok pukul ${jadwalItem.jam} bersama ${jadwalItem.dokter}.\n\nMohon datang tepat waktu. Terima kasih 🙏`;
    
    if (method === "whatsapp") {
      alert(`📱 WhatsApp ke ${pasien?.phone || "nomor pasien"}:\n${message}`);
    } else {
      alert(`📧 Email ke ${pasien?.email || "email pasien"}:\n${message}`);
    }
    
    setJadwal(jadwal.map(j => j.id === jadwalItem.id ? { ...j, reminderSent: true } : j));
  };

  const filteredJadwal = jadwal.filter(j => j.tanggal === selectedDate);

  return (
    <div>
      {/* Header Gradasi */}
      <div className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] rounded-xl p-6 mb-6 text-white">
        <h1 className="text-2xl font-bold">Penjadwalan & Reminder Otomatis</h1>
        <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
          <span>Home</span>
          <span>/</span>
          <span>Jadwal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kalender Sidebar */}
        <div className="bg-white rounded-xl border border-[#D9DEE3] p-5">
          <h3 className="font-semibold mb-4 flex items-center text-[#1A1A1A]">
            <FaCalendarAlt className="mr-2 text-[#9FB2C8]" /> Pilih Tanggal
          </h3>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 border border-[#D9DEE3] rounded-lg mb-4"
          />
          
          <h4 className="font-medium mb-3 text-[#1A1A1A]">📋 Jadwal Hari Ini</h4>
          {filteredJadwal.length === 0 ? (
            <p className="text-[#7A8DA3] text-sm">Tidak ada jadwal</p>
          ) : (
            filteredJadwal.map(j => (
              <div key={j.id} className="border-l-4 border-[#9FB2C8] pl-3 py-2 mb-3">
                <p className="font-medium text-[#1A1A1A]">{j.pasien} - {j.tindakan}</p>
                <p className="text-sm text-[#7A8DA3] flex items-center"><FaClock className="mr-1 text-xs" /> {j.jam} | {j.dokter}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => sendReminder(j, "whatsapp")} className="text-green-500 text-xs flex items-center"><FaWhatsapp className="mr-1" /> WA</button>
                  <button onClick={() => sendReminder(j, "email")} className="text-blue-500 text-xs flex items-center"><FaEnvelope className="mr-1" /> Email</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Tabel Jadwal */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#D9DEE3] overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white">
              <tr>
                <th className="p-3 text-left">Tanggal</th>
                <th className="p-3 text-left">Pasien</th>
                <th className="p-3 text-left">Tindakan</th>
                <th className="p-3 text-left">Dokter</th>
                <th className="p-3 text-left">Jam</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Reminder</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map(j => (
                <tr key={j.id} className="border-t border-[#D9DEE3] hover:bg-[#F5F7FA]">
                  <td className="p-3">{j.tanggal}</td>
                  <td className="p-3">{j.pasien}</td>
                  <td className="p-3">{j.tindakan}</td>
                  <td className="p-3">{j.dokter}</td>
                  <td className="p-3">{j.jam}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs text-white ${j.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                      {j.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </span>
                  </td>
                  <td className="p-3">
                    {j.reminderSent ? (
                      <span className="text-green-500 text-xs">✓ Terkirim</span>
                    ) : (
                      <button onClick={() => sendReminder(j)} className="text-[#9FB2C8] text-xs">Kirim</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Sistem Reminder - Gradasi */}
      <div className="mt-6 bg-gradient-to-r from-[#9FB2C8]/20 to-[#7A8DA3]/20 rounded-xl p-5 border border-[#9FB2C8]/30">
        <h3 className="font-semibold mb-3 flex items-center text-[#1A1A1A]">
          <FaWhatsapp className="mr-2 text-green-500" /> 🤖 Sistem Reminder Otomatis (SA)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="bg-white rounded-lg p-3 shadow-sm">📅 <strong>H-3</strong> Sebelum jadwal: "Jadwal kontrol Anda dalam 3 hari"</div>
          <div className="bg-white rounded-lg p-3 shadow-sm">⏰ <strong>H-1</strong> Sebelum jadwal: "Besok jadwal kontrol Anda pukul ..."</div>
          <div className="bg-white rounded-lg p-3 shadow-sm">📋 <strong>H+1</strong> Pasca tindakan: "Terima kasih, isi survei kepuasan kami"</div>
        </div>
      </div>
    </div>
  );
}