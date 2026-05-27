// PasienKlinik.jsx

import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaPlus,
  FaHistory,
  FaUserPlus,
} from "react-icons/fa";

import {
  dataPasien,
  dataTransaksi,
  getTotalPoinPasien,
} from "../../data/KlinikData";

import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import InputSearch from "../../components/InputSearch";
import ButtonGradient from "../../components/ButtonGradient";
import TableHeader from "../../components/TableHeader";
import Modal from "../../components/Modal";
import InputField from "../../components/InputField";
import BadgeStatus from "../../components/BadgeStatus";
import AvatarKlinik from "../../components/AvatarKlinik";
import EmptyState from "../../components/EmptyState";

export default function PasienKlinik() {
  const [pasien, setPasien] =
    useState(dataPasien);

  const [showForm, setShowForm] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [formData, setFormData] =
    useState({
      nama: "",
      email: "",
      phone: "",
    });

  const [selectedPasien, setSelectedPasien] =
    useState(null);

  const [showRiwayat, setShowRiwayat] =
    useState(false);

  // TAMBAH PASIEN
  const handleAddPasien = (e) => {
    e.preventDefault();

    const newPasien = {
      id: pasien.length + 1,
      ...formData,
      riwayat: "Pemeriksaan Awal",
      loyalitas: "Bronze",
      lastVisit: new Date()
        .toISOString()
        .split("T")[0],
      poin: 0,
    };

    setPasien([...pasien, newPasien]);

    setShowForm(false);

    setFormData({
      nama: "",
      email: "",
      phone: "",
    });

    alert(
      `✅ ${newPasien.nama} berhasil ditambahkan!`
    );
  };

  // SEARCH
  const filteredPasien = pasien.filter(
    (p) =>
      p.nama
        ?.toLowerCase()
        ?.includes(searchTerm.toLowerCase()) ||
      p.email
        ?.toLowerCase()
        ?.includes(searchTerm.toLowerCase())
  );

  // SHOW RIWAYAT
  const showRiwayatPasien = (p) => {
    setSelectedPasien(p);
    setShowRiwayat(true);
  };

  // CARD DATA
  const statsCards = [
    {
      title: "Total Pasien",
      value: pasien.length,
      icon: FaUserPlus,
      gradient:
        "from-[#9FB2C8] to-[#7A8DA3]",
    },
    {
      title: "Pasien Baru Bulan Ini",
      value: "12",
      icon: FaUserPlus,
      gradient:
        "from-[#8BA3C4] to-[#6B8DA8]",
    },
    {
      title: "Tingkat Kepuasan",
      value: "94%",
      icon: FaUserPlus,
      gradient:
        "from-[#7A9CBF] to-[#5A7D9F]",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <PageHeader
        title="Manajemen Pasien"
        breadcrumb={[
          "Home",
          "Pasien",
        ]}
      />

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {statsCards.map((card, idx) => (
          <StatCard
            key={idx}
            title={card.title}
            value={card.value}
            icon={card.icon}
            gradient={card.gradient}
          />
        ))}
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <InputSearch
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          placeholder="Cari pasien berdasarkan nama atau email..."
          icon={FaSearch}
        />
      </div>

      {/* BUTTON */}
      <ButtonGradient
        icon={FaPlus}
        onClick={() => setShowForm(true)}
        className="mb-4"
      >
        Tambah Pasien
      </ButtonGradient>

      {/* TABLE */}
      <div className="bg-white rounded-xl border border-[#D9DEE3] overflow-hidden">
        <table className="w-full">
          <TableHeader
            columns={[
              "Nama",
              "Kontak",
              "Riwayat Terakhir",
              "Loyalitas",
              "Last Visit",
              "Aksi",
            ]}
          />

          <tbody>
            {filteredPasien.length > 0 ? (
              filteredPasien.map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-[#D9DEE3] hover:bg-[#F5F7FA]"
                >
                  {/* NAMA */}
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <AvatarKlinik
                        name={p.nama}
                        size="md"
                      />

                      <div>
                        <Link
                          to={`/klinik/pasien/${p.id}`}
                          className="font-medium text-[#5A7D9F] hover:underline"
                        >
                          {p.nama}
                        </Link>

                        <p className="text-xs text-[#7A8DA3]">
                          ID: {p.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* KONTAK */}
                  <td className="p-3 text-sm">
                    {p.email}
                    <br />
                    {p.phone}
                  </td>

                  {/* RIWAYAT */}
                  <td className="p-3">
                    {p.riwayat}
                  </td>

                  {/* LOYALITAS */}
                  <td className="p-3">
                    <BadgeStatus
                      type={p.loyalitas}
                    />
                  </td>

                  {/* LAST VISIT */}
                  <td className="p-3">
                    {p.lastVisit}
                  </td>

                  {/* AKSI */}
                  <td className="p-3">
                    <button
                      onClick={() =>
                        showRiwayatPasien(p)
                      }
                      className="text-[#9FB2C8] hover:text-[#7A8DA3]"
                    >
                      <FaHistory />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>
                  <EmptyState
                    title="Data pasien tidak ditemukan"
                    subtitle="Coba gunakan keyword lain"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL TAMBAH */}
      {showForm && (
        <Modal
          title="Tambah Pasien Baru"
          onClose={() =>
            setShowForm(false)
          }
        >
          <form onSubmit={handleAddPasien}>
            <InputField
              placeholder="Nama Lengkap"
              value={formData.nama}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nama: e.target.value,
                })
              }
            />

            <InputField
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

            <InputField
              type="tel"
              placeholder="No. WhatsApp"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
            />

            <div className="flex gap-3 mt-4">
              <ButtonGradient
                type="submit"
                className="flex-1"
              >
                Simpan
              </ButtonGradient>

              <button
                type="button"
                onClick={() =>
                  setShowForm(false)
                }
                className="bg-gray-200 px-4 py-2 rounded flex-1"
              >
                Batal
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* MODAL RIWAYAT */}
      {showRiwayat &&
        selectedPasien && (
          <Modal
            title={`Riwayat Perawatan: ${selectedPasien.nama}`}
            onClose={() =>
              setShowRiwayat(false)
            }
            maxWidth="max-w-2xl"
          >
            <div className="mb-4 p-3 bg-gradient-to-r from-[#9FB2C8]/10 to-[#7A8DA3]/10 rounded-lg">
              <p>
                <strong>
                  Status Loyalitas:
                </strong>{" "}
                {selectedPasien.loyalitas}
              </p>

              <p>
                <strong>
                  Total Poin:
                </strong>{" "}
                {getTotalPoinPasien(
                  selectedPasien.id
                )}
              </p>

              <p>
                <strong>
                  Kunjungan Terakhir:
                </strong>{" "}
                {selectedPasien.lastVisit}
              </p>
            </div>

            <h4 className="font-semibold mb-2">
              Histori Transaksi:
            </h4>

            <table className="w-full text-sm">
              <thead className="bg-[#F5F7FA]">
                <tr>
                  <th className="p-2 text-left">
                    Tanggal
                  </th>

                  <th className="p-2 text-left">
                    Tindakan
                  </th>

                  <th className="p-2 text-left">
                    Total
                  </th>

                  <th className="p-2 text-left">
                    Poin
                  </th>
                </tr>
              </thead>

              <tbody>
                {dataTransaksi
                  .filter(
                    (t) =>
                      t.pasienId ===
                      selectedPasien.id
                  )
                  .map((t) => (
                    <tr
                      key={t.id}
                      className="border-t"
                    >
                      <td className="p-2">
                        {t.tanggal}
                      </td>

                      <td className="p-2">
                        {t.tindakan}
                      </td>

                      <td className="p-2">
                        Rp{" "}
                        {t.total.toLocaleString()}
                      </td>

                      <td className="p-2">
                        {t.poin}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Modal>
        )}
    </div>
  );
}