import { useState } from "react";

import {
  FaCalendarAlt,
  FaClock,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import {
  dataJadwal,
  dataPasien,
} from "../../data/KlinikData";

import HeaderGradient from "../../components/HeaderGradient";
import CardPutih from "../../components/CardPutih";
import SectionTitle from "../../components/SectionTitle";
import TableHeader from "../../components/TableHeader";
import BadgeStatus from "../../components/BadgeStatus";
import ButtonGradient from "../../components/ButtonGradient";
import EmptyState from "../../components/EmptyState";
import AvatarKlinik from "../../components/AvatarKlinik";

export default function JadwalKlinik() {
  const [jadwal, setJadwal] =
    useState(dataJadwal);

  const [selectedDate, setSelectedDate] =
    useState(
      new Date()
        .toISOString()
        .split("T")[0]
    );

  const sendReminder = (
    jadwalItem,
    method = "whatsapp"
  ) => {
    const pasien = dataPasien.find(
      (p) =>
        p.id === jadwalItem.pasienId
    );

    const message = `🔔 Reminder Jadwal Kontrol\n\nHalo ${jadwalItem.pasien},\nJadwal ${jadwalItem.tindakan} Anda besok pukul ${jadwalItem.jam} bersama ${jadwalItem.dokter}.\n\nMohon datang tepat waktu. Terima kasih 🙏`;

    if (method === "whatsapp") {
      alert(
        `📱 WhatsApp ke ${
          pasien?.phone ||
          "nomor pasien"
        }:\n${message}`
      );
    } else {
      alert(
        `📧 Email ke ${
          pasien?.email ||
          "email pasien"
        }:\n${message}`
      );
    }

    setJadwal(
      jadwal.map((j) =>
        j.id === jadwalItem.id
          ? {
              ...j,
              reminderSent: true,
            }
          : j
      )
    );
  };

  const filteredJadwal =
    jadwal.filter(
      (j) =>
        j.tanggal === selectedDate
    );

  return (
    <div>
      {/* HEADER */}
      <HeaderGradient
        title="Penjadwalan & Reminder Otomatis"
        subtitle="Kelola jadwal kontrol pasien dan sistem reminder otomatis"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SIDEBAR */}
        <CardPutih>
          <SectionTitle
            title="Pilih Tanggal"
            icon={FaCalendarAlt}
          />

          <input
            type="date"
            value={selectedDate}
            onChange={(e) =>
              setSelectedDate(
                e.target.value
              )
            }
            className="w-full p-2 border border-[#D9DEE3] rounded-lg mb-4"
          />

          <h4 className="font-medium mb-3 text-[#1A1A1A]">
            📋 Jadwal Hari Ini
          </h4>

          {filteredJadwal.length ===
          0 ? (
            <EmptyState
              title="Tidak ada jadwal"
              subtitle="Belum ada jadwal pada tanggal ini"
            />
          ) : (
            filteredJadwal.map((j) => (
              <div
                key={j.id}
                className="border-l-4 border-[#9FB2C8] pl-3 py-2 mb-3"
              >
                <div className="flex items-center gap-3 mb-2">
                  <AvatarKlinik
                    name={j.pasien}
                    size="sm"
                  />

                  <div>
                    <p className="font-medium text-[#1A1A1A]">
                      {j.pasien}
                    </p>

                    <p className="text-xs text-[#7A8DA3]">
                      {
                        j.tindakan
                      }
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#7A8DA3] flex items-center">
                  <FaClock className="mr-1 text-xs" />
                  {j.jam} |{" "}
                  {j.dokter}
                </p>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() =>
                      sendReminder(
                        j,
                        "whatsapp"
                      )
                    }
                    className="text-green-500 text-xs flex items-center"
                  >
                    <FaWhatsapp className="mr-1" />
                    WA
                  </button>

                  <button
                    onClick={() =>
                      sendReminder(
                        j,
                        "email"
                      )
                    }
                    className="text-blue-500 text-xs flex items-center"
                  >
                    <FaEnvelope className="mr-1" />
                    Email
                  </button>
                </div>
              </div>
            ))
          )}
        </CardPutih>

        {/* TABLE */}
        <div className="lg:col-span-2">
          <CardPutih className="overflow-hidden p-0">
            <table className="w-full">
              <TableHeader
                columns={[
                  "Tanggal",
                  "Pasien",
                  "Tindakan",
                  "Dokter",
                  "Jam",
                  "Status",
                  "Reminder",
                ]}
              />

              <tbody>
                {jadwal.map((j) => (
                  <tr
                    key={j.id}
                    className="border-t border-[#D9DEE3] hover:bg-[#F5F7FA]"
                  >
                    <td className="p-3">
                      {j.tanggal}
                    </td>

                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <AvatarKlinik
                          name={j.pasien}
                          size="sm"
                        />

                        <span>
                          {j.pasien}
                        </span>
                      </div>
                    </td>

                    <td className="p-3">
                      {j.tindakan}
                    </td>

                    <td className="p-3">
                      {j.dokter}
                    </td>

                    <td className="p-3">
                      {j.jam}
                    </td>

                    <td className="p-3">
                      <BadgeStatus
                        type={
                          j.status ===
                          "confirmed"
                            ? "Success"
                            : "Warning"
                        }
                        text={
                          j.status ===
                          "confirmed"
                            ? "Confirmed"
                            : "Pending"
                        }
                      />
                    </td>

                    <td className="p-3">
                      {j.reminderSent ? (
                        <span className="text-green-500 text-xs">
                          ✓
                          Terkirim
                        </span>
                      ) : (
                        <ButtonGradient
                          onClick={() =>
                            sendReminder(
                              j
                            )
                          }
                          className="text-xs px-3 py-1"
                        >
                          Kirim
                        </ButtonGradient>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardPutih>
        </div>
      </div>

      {/* INFO REMINDER */}
      <div className="mt-6">
        <CardPutih>
          <SectionTitle
            title="🤖 Sistem Reminder Otomatis (SA)"
            icon={FaWhatsapp}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-[#F5F7FA] rounded-lg p-3">
              📅 <strong>H-3</strong>
              {" "}
              Sebelum jadwal:
              "Jadwal kontrol Anda dalam 3 hari"
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-3">
              ⏰ <strong>H-1</strong>
              {" "}
              Sebelum jadwal:
              "Besok jadwal kontrol Anda pukul ..."
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-3">
              📋 <strong>H+1</strong>
              {" "}
              Pasca tindakan:
              "Terima kasih, isi survei kepuasan kami"
            </div>
          </div>
        </CardPutih>
      </div>
    </div>
  );
}