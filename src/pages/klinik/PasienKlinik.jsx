import { useState } from "react";
import { FaSearch, FaPlus, FaHistory, FaUserPlus } from "react-icons/fa";
import { dataPasien, dataTransaksi, getTotalPoinPasien } from "../../data/KlinikData";

export default function PasienKlinik() {
  const [pasien, setPasien] = useState(dataPasien);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({ nama: "", email: "", phone: "" });
  const [selectedPasien, setSelectedPasien] = useState(null);
  const [showRiwayat, setShowRiwayat] = useState(false);

  const handleAddPasien = (e) => {
    e.preventDefault();
    const newPasien = {
      id: pasien.length + 1,
      ...formData,
      riwayat: "Pemeriksaan Awal",
      loyalitas: "Bronze",
      lastVisit: new Date().toISOString().split('T')[0],
      poin: 0
    };
    setPasien([...pasien, newPasien]);
    setShowForm(false);
    setFormData({ nama: "", email: "", phone: "" });
    alert(`✅ ${newPasien.nama} berhasil ditambahkan!`);
  };

  const filteredPasien = pasien.filter(p => 
    p.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showRiwayatPasien = (p) => {
    setSelectedPasien(p);
    setShowRiwayat(true);
  };

  // Statistik card dengan gradasi biru
  const statsCards = [
    { title: "Total Pasien", value: pasien.length, icon: FaUserPlus, gradient: "from-[#9FB2C8] to-[#7A8DA3]" },
    { title: "Pasien Baru Bulan Ini", value: "12", icon: FaUserPlus, gradient: "from-[#8BA3C4] to-[#6B8DA8]" },
    { title: "Tingkat Kepuasan", value: "94%", icon: FaUserPlus, gradient: "from-[#7A9CBF] to-[#5A7D9F]" },
  ];

  return (
    <div>
      {/* Header dengan gradasi */}
      <div className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] rounded-xl p-6 mb-6 text-white">
        <h1 className="text-2xl font-bold">Manajemen Pasien</h1>
        <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
          <span>Home</span>
          <span>/</span>
          <span>Pasien</span>
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
                  <p className="text-3xl font-bold">{card.value}</p>
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

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Cari pasien berdasarkan nama atau email..."
          className="w-full p-3 pl-10 border border-[#D9DEE3] rounded-lg focus:outline-none focus:border-[#9FB2C8]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A8DA3]" />
      </div>

      {/* Tombol Tambah Pasien */}
      <button onClick={() => setShowForm(true)} className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white px-4 py-2 rounded-lg flex items-center gap-2 mb-4 hover:opacity-90 transition">
        <FaPlus /> Tambah Pasien
      </button>

      {/* Tabel Pasien dengan style gradasi header */}
      <div className="bg-white rounded-xl border border-[#D9DEE3] overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white">
            <tr>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Kontak</th>
              <th className="p-3 text-left">Riwayat Terakhir</th>
              <th className="p-3 text-left">Loyalitas</th>
              <th className="p-3 text-left">Last Visit</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredPasien.map((p) => (
              <tr key={p.id} className="border-t border-[#D9DEE3] hover:bg-[#F5F7FA]">
                <td className="p-3 font-medium">{p.nama}</td>
                <td className="p-3 text-sm">{p.email}<br/>{p.phone}</td>
                <td className="p-3">{p.riwayat}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs text-white ${
                    p.loyalitas === 'Gold' ? 'bg-yellow-500' : p.loyalitas === 'Silver' ? 'bg-gray-400' : 'bg-orange-500'
                  }`}>{p.loyalitas}</span>
                </td>
                <td className="p-3">{p.lastVisit}</td>
                <td className="p-3">
                  <button onClick={() => showRiwayatPasien(p)} className="text-[#9FB2C8] hover:text-[#7A8DA3]">
                    <FaHistory />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Tambah Pasien */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Tambah Pasien Baru</h3>
            <form onSubmit={handleAddPasien}>
              <input type="text" placeholder="Nama Lengkap" className="w-full p-2 border rounded-lg mb-3" 
                value={formData.nama} onChange={(e) => setFormData({...formData, nama: e.target.value})} required />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded-lg mb-3" 
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <input type="tel" placeholder="No. WhatsApp" className="w-full p-2 border rounded-lg mb-3" 
                value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              <div className="flex gap-3">
                <button type="submit" className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white px-4 py-2 rounded flex-1">Simpan</button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-gray-200 px-4 py-2 rounded flex-1">Batal</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Riwayat */}
      {showRiwayat && selectedPasien && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Riwayat Perawatan: {selectedPasien.nama}</h3>
              <button onClick={() => setShowRiwayat(false)} className="text-gray-500">✕</button>
            </div>
            <div className="mb-4 p-3 bg-gradient-to-r from-[#9FB2C8]/10 to-[#7A8DA3]/10 rounded-lg">
              <p><strong>Status Loyalitas:</strong> {selectedPasien.loyalitas}</p>
              <p><strong>Total Poin:</strong> {getTotalPoinPasien(selectedPasien.id)}</p>
              <p><strong>Kunjungan Terakhir:</strong> {selectedPasien.lastVisit}</p>
            </div>
            <h4 className="font-semibold mb-2">Histori Transaksi:</h4>
            <table className="w-full text-sm">
              <thead className="bg-[#F5F7FA]">
                <tr><th className="p-2 text-left">Tanggal</th><th className="p-2 text-left">Tindakan</th><th className="p-2 text-left">Total</th><th className="p-2 text-left">Poin</th></tr>
              </thead>
              <tbody>
                {dataTransaksi.filter(t => t.pasienId === selectedPasien.id).map(t => (
                  <tr key={t.id} className="border-t">
                    <td className="p-2">{t.tanggal}</td>
                    <td className="p-2">{t.tindakan}</td>
                    <td className="p-2">Rp {t.total.toLocaleString()}</td>
                    <td className="p-2">{t.poin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}