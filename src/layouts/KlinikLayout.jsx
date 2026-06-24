import { Outlet, NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaUsers,
  FaCalendarAlt,
  FaCreditCard,
  FaCommentDots,
  FaGift,
  FaSignOutAlt,
  FaTooth,
  FaBox,
} from "react-icons/fa";

export default function KlinikLayout() {
  const menuClass = ({ isActive }) => `
    flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200
    ${
      isActive
        ? "bg-[#9FB2C8] text-white shadow-sm"
        : "text-[#1A1A1A] hover:bg-[#D9DEE3]"
    }
  `;

  const menuItems = [
    { path: "/", name: "Dashboard", icon: FaChartLine },

    // CRUD USER SUPABASE
    { path: "/users", name: "Manajemen User", icon: FaUsers },

    { path: "/klinik/pasien", name: "Data Pasien", icon: FaUsers },

    {
      path: "/klinik/jadwal",
      name: "Penjadwalan",
      icon: FaCalendarAlt,
    },

    {
      path: "/klinik/pembayaran",
      name: "Pembayaran",
      icon: FaCreditCard,
    },

    {
      path: "/klinik/keluhan",
      name: "Keluhan",
      icon: FaCommentDots,
    },

    {
      path: "/klinik/loyalitas",
      name: "Loyalitas",
      icon: FaGift,
    },

    {
      path: "/klinik/ProductKlinik",
      name: "Product Klinik",
      icon: FaBox,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">

      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-[#D9DEE3] flex flex-col">

        {/* Logo */}
        <div className="p-6 border-b border-[#D9DEE3]">
          <div className="flex items-center gap-3">

            <div className="bg-[#9FB2C8] p-3 rounded-xl">
              <FaTooth className="text-white text-xl" />
            </div>

            <div>
              <h1 className="font-bold text-xl text-[#1A1A1A]">
                Klinik.
              </h1>

              <p className="text-xs text-[#7A8DA3]">
                Gigi Permata
              </p>
            </div>

          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={menuClass}
                  >
                    <Icon className="text-lg" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}

          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#D9DEE3]">

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");

              window.location.href = "/login";
            }}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[#1A1A1A] hover:bg-[#D9DEE3] w-full transition-all"
          >
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="ml-64 flex-1 p-8">
        <Outlet />
      </div>

    </div>
  );
}