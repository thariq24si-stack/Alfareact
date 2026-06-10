import { useState } from "react";
import {
  FaCommentDots,
  FaCheckCircle,
  FaSpinner,
  FaPaperPlane,
  FaStar,
} from "react-icons/fa";
import { dataKeluhan, dataPasien } from "../../data/KlinikData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Keluhan() {
  const [keluhan, setKeluhan] = useState(dataKeluhan);
  const [selectedKeluhan, setSelectedKeluhan] = useState(null);
  const [respon, setRespon] = useState("");

  const updateStatus = (id, newStatus, responseText = "") => {
    setKeluhan(
      keluhan.map((k) =>
        k.id === id
          ? { ...k, status: newStatus, respon: responseText || k.respon }
          : k,
      ),
    );
    if (responseText) {
      alert(`✅ Respon telah dikirim ke pasien via WhatsApp`);
    }
    setSelectedKeluhan(null);
    setRespon("");
  };

  const unanswered = keluhan.filter((k) => k.status === "proses").length;

  return (
    <div>
      {/* Header Gradasi */}
      <div className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] rounded-xl p-6 mb-6 text-white">
        <h1 className="text-2xl font-bold">Manajemen Keluhan & Feedback</h1>
        <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
          <span>Home</span>
          <span>/</span>
          <span>Keluhan</span>
        </div>
      </div>

      {/* Stat Card */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 mb-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm opacity-90">Belum Ditanggapi</p>
            <p className="text-3xl font-bold">{unanswered}</p>
          </div>
          <FaCommentDots className="text-4xl opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daftar Keluhan - Card Gradasi */}
        <div className="bg-white rounded-xl border border-[#D9DEE3] p-5">
          <h3 className="font-semibold mb-4 flex items-center text-[#1A1A1A]">
            <FaCommentDots className="mr-2 text-[#9FB2C8]" /> Daftar Keluhan
            Pasien
          </h3>
          {keluhan.map((k) => (
            <div
              key={k.id}
              className="border-b border-[#D9DEE3] pb-3 mb-3 last:border-0"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium text-[#1A1A1A]">{k.pasien}</p>
                  <p className="text-sm text-[#7A8DA3] mt-1">{k.keluhan}</p>
                  <p className="text-xs text-[#7A8DA3] mt-1">{k.tanggal}</p>
                  {k.respon && (
                    <p className="text-xs text-green-600 mt-1">
                      ✓ Respon: {k.respon}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span
                    className={`text-xs px-2 py-1 rounded ${k.status === "proses" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
                  >
                    {k.status === "proses" ? (
                      <>
                        <FaSpinner className="inline mr-1 animate-spin" />{" "}
                        Proses
                      </>
                    ) : (
                      <>
                        <FaCheckCircle className="inline mr-1" /> Selesai
                      </>
                    )}
                  </span>
                  {k.status === "proses" && (
                    <button
                      onClick={() => setSelectedKeluhan(k)}
                      className="block mt-2 text-[#9FB2C8] text-sm"
                    >
                      Tanggapi
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Survei Kepuasan */}
        <div className="bg-white rounded-xl border border-[#D9DEE3] p-5">
          <h3 className="font-semibold mb-4 flex items-center text-[#1A1A1A]">
            <FaStar className="mr-2 text-yellow-500" /> ⭐ Survei Kepuasan
            Pasien (H+1)
          </h3>
          <p className="text-sm text-[#7A8DA3] mb-4">
            Survei dikirim otomatis 1 hari setelah kunjungan via WhatsApp
          </p>
          <div className="space-y-3">
            {dataPasien.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="border border-[#D9DEE3] rounded-lg p-3"
              >
                <p className="font-medium text-[#1A1A1A]">{p.nama}</p>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="text-yellow-400 text-xl hover:scale-110 transition"
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#7A8DA3] mt-2">
                  Survei dikirim: {new Date().toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Tanggapi Keluhan */}
      {selectedKeluhan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">
              Tanggapi Keluhan
            </h3>
            <p className="text-sm text-[#7A8DA3] mb-3">
              Pasien: {selectedKeluhan.pasien}
            </p>
            <p className="text-sm bg-[#F5F7FA] p-3 rounded-lg mb-3">
              "{selectedKeluhan.keluhan}"
            </p>
            <textarea
              className="w-full p-3 border border-[#D9DEE3] rounded-lg mb-3 focus:outline-none focus:border-[#9FB2C8]"
              rows="3"
              placeholder="Tulis respon Anda..."
              value={respon}
              onChange={(e) => setRespon(e.target.value)}
            />
            <div className="flex gap-3">
              <button
                onClick={() =>
                  updateStatus(selectedKeluhan.id, "selesai", respon)
                }
                className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white px-4 py-2 rounded-lg flex-1 flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Kirim Respon
              </button>
              <button
                onClick={() => setSelectedKeluhan(null)}
                className="bg-gray-200 px-4 py-2 rounded-lg flex-1"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SHADCN ACCORDION */}
      <div className="mt-6 bg-white rounded-xl border border-[#D9DEE3] p-5">
        <h3 className="font-semibold mb-4">FAQ Keluhan Pasien</h3>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Bagaimana proses menanggapi keluhan?
            </AccordionTrigger>

            <AccordionContent>
              Admin dapat membuka detail keluhan lalu mengirim respon langsung
              kepada pasien.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Apakah respon dikirim otomatis?</AccordionTrigger>

            <AccordionContent>
              Ya, sistem dapat mengirim notifikasi WhatsApp kepada pasien.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Kapan survei kepuasan dikirim?</AccordionTrigger>

            <AccordionContent>
              Survei dikirim otomatis H+1 setelah kunjungan pasien.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Info SA - Gradasi */}
      <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-[#9FB2C8]/30">
        <h3 className="font-semibold mb-2 text-[#1A1A1A]">
          📱 Sistem Notifikasi Otomatis (Service Automation)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
          <div className="bg-white rounded-lg p-2 shadow-sm">
            ✓ Follow-up pasca tindakan (H+1)
          </div>
          <div className="bg-white rounded-lg p-2 shadow-sm">
            ✓ Reminder kontrol (H-7, H-3, H-1)
          </div>
          <div className="bg-white rounded-lg p-2 shadow-sm">
            ✓ Survei kepuasan otomatis (H+1)
          </div>
        </div>
      </div>
    </div>
  );
}
