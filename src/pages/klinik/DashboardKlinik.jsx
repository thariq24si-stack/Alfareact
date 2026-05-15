import { useState, useEffect } from "react";

import { 
  FaUsers, FaCalendarCheck, FaWallet, FaChartLine, 
  FaArrowUp, FaArrowDown, FaDownload, FaStethoscope, 
  FaSmile, FaUserMd, FaHospitalUser 
} from "react-icons/fa";
import { dataPasien, dataJadwal, dataTransaksi } from "../../data/KlinikData";

export default function DashboardKlinik() {
  const [stats, setStats] = useState({
    totalPasien: 0,
    activeUsers: 0,
    totalKunjungan: 0,
    pendapatan: 0,
    avgSession: "2m 34s"
  });

  useEffect(() => {
    setStats({
      totalPasien: dataPasien.length,
      activeUsers: Math.floor(dataPasien.length * 0.68),
      totalKunjungan: dataJadwal.length,
      pendapatan: dataTransaksi.reduce((sum, t) => sum + t.total, 0),
      avgSession: "2m 34s"
    });
  }, []);

  const monthlyData = [
    { month: "JAN", aktivitas: 45, target: 60 },
    { month: "FEB", aktivitas: 52, target: 60 },
    { month: "MAR", aktivitas: 48, target: 60 },
    { month: "APR", aktivitas: 68, target: 60 },
    { month: "MAY", aktivitas: 72, target: 60 },
    { month: "JUN", aktivitas: 85, target: 60 },
    { month: "JUL", aktivitas: 78, target: 60 },
    { month: "AUG", aktivitas: 82, target: 60 },
    { month: "SEP", aktivitas: 88, target: 60 },
    { month: "OCT", aktivitas: 92, target: 60 },
    { month: "NOV", aktivitas: 86, target: 60 },
    { month: "DEC", aktivitas: 94, target: 60 },
  ];

  const maxValue = 100;
  const chartHeight = 120;

  const cards = [
    { 
      title: "Active Users", 
      value: `${stats.activeUsers}/${stats.totalPasien}`, 
      subValue: `${Math.round((stats.activeUsers / stats.totalPasien) * 100)}%`,
      icon: FaUsers, 
      trend: "+12%",
      trendUp: true,
      gradient: "from-[#9FB2C8] to-[#7A8DA3]"
    },
    { 
      title: "Questions Answered", 
      value: stats.totalKunjungan.toString(), 
      subValue: "this month",
      icon: FaChartLine, 
      trend: "+8%",
      trendUp: true,
      gradient: "from-[#8BA3C4] to-[#6B8DA8]"
    },
    { 
      title: "Av. Session Length", 
      value: stats.avgSession, 
      subValue: "per visit",
      icon: FaCalendarCheck, 
      trend: "-2%",
      trendUp: false,
      gradient: "from-[#7A9CBF] to-[#5A7D9F]"
    },
    { 
      title: "Pendapatan", 
      value: `Rp ${(stats.pendapatan / 1000000).toFixed(1)}M`, 
      subValue: "total revenue",
      icon: FaWallet, 
      trend: "+34%",
      trendUp: true,
      gradient: "from-[#9FB2C8] to-[#7A8DA3]"
    },
  ];

  // STATS KEDUA - Flat seperti gambar (tanpa card)
  const statsKedua = [
    { title: "Performed surgeries", value: "170", icon: FaStethoscope },
    { title: "Satisfied Patients", value: "85", icon: FaSmile },
    { title: "Staff Members", value: "176", icon: FaUserMd },
    { title: "Yearly Surgeries", value: "98", icon: FaHospitalUser },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Reports</h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-[#7A8DA3]">
            <span>📅 Timeframe: <strong>All-time</strong></span>
            <span>👥 People: <strong>All</strong></span>
            <span>📋 Topic: <strong>All</strong></span>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#D9DEE3] rounded-lg text-sm text-[#1A1A1A] hover:bg-[#F5F7FA] transition-all">
          <FaDownload className="text-[#9FB2C8]" />
          Export Data
        </button>
      </div>

      {/* STATS CARDS PERTAMA (BIRU GRADASI) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${card.gradient} rounded-xl p-5 shadow-lg text-white hover:shadow-xl transition-all`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur">
                  <Icon className="text-white text-lg" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 bg-white/20 text-white`}>
                  {card.trendUp ? <FaArrowUp className="text-xs" /> : <FaArrowDown className="text-xs" />}
                  {card.trend}
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{card.value}</p>
                <p className="text-xs text-white/70 mt-1">{card.subValue}</p>
                <p className="text-sm font-medium mt-2 text-white/90">{card.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* STATS KEDUA - FLAT SEPERTI GAMBAR (TANPA CARD) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {statsKedua.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex justify-between items-center border-b border-[#D9DEE3] pb-4">
              <div>
                <p className="text-4xl font-bold text-[#1A1A1A]">{stat.value}</p>
                <p className="text-sm text-[#7A8DA3] mt-1">{stat.title}</p>
              </div>
              <div className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center">
                <Icon className="text-[#9FB2C8] text-xl" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl border border-[#D9DEE3] p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A1A]">Activity</h2>
            <p className="text-sm text-[#7A8DA3]">Monthly patient visits vs target</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#9FB2C8] rounded-full"></div>
              <span className="text-[#1A1A1A]">Aktivitas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#D9DEE3] rounded-full"></div>
              <span className="text-[#1A1A1A]">Target</span>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="relative h-48">
          <div className="flex justify-between items-end h-full">
            {monthlyData.map((data, idx) => {
              const barHeight = (data.aktivitas / maxValue) * chartHeight;
              const targetHeight = (data.target / maxValue) * chartHeight;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div className="relative w-full flex justify-center gap-1 h-[130px]">
                    <div 
                      className="w-4 bg-[#D9DEE3] rounded-t absolute bottom-0"
                      style={{ height: `${targetHeight}px` }}
                    ></div>
                    <div 
                      className="w-4 bg-[#9FB2C8] rounded-t relative z-10"
                      style={{ height: `${barHeight}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-[#7A8DA3] mt-2">{data.month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activity & Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Patient Activity */}
        <div className="bg-white rounded-xl border border-[#D9DEE3] p-5 lg:col-span-2">
          <h3 className="font-semibold text-[#1A1A1A] mb-4">Recent Patient Activity</h3>
          <div className="space-y-3">
            {dataJadwal.slice(0, 4).map((j) => (
              <div key={j.id} className="flex justify-between items-center py-2 border-b border-[#D9DEE3] last:border-0">
                <div>
                  <p className="font-medium text-sm text-[#1A1A1A]">{j.pasien}</p>
                  <p className="text-xs text-[#7A8DA3]">{j.tindakan} • {j.tanggal}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  j.status === 'confirmed' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                }`}>
                  {j.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-white rounded-xl border border-[#D9DEE3] p-5">
          <h3 className="font-semibold text-[#1A1A1A] mb-4">Performance</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#7A8DA3]">Customer Satisfaction</span>
                <span className="font-medium text-[#1A1A1A]">86%</span>
              </div>
              <div className="w-full bg-[#D9DEE3] rounded-full h-2">
                <div className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] rounded-full h-2" style={{ width: "86%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#7A8DA3]">Retention Rate</span>
                <span className="font-medium text-[#1A1A1A]">64%</span>
              </div>
              <div className="w-full bg-[#D9DEE3] rounded-full h-2">
                <div className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] rounded-full h-2" style={{ width: "64%" }}></div>
              </div>
            </div>
            <div className="pt-3 mt-2 border-t border-[#D9DEE3]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-[#7A8DA3]">Overall Growth</p>
                  <p className="text-2xl font-bold text-[#1A1A1A]">+34%</p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <FaArrowUp className="text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}