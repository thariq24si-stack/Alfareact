import { Outlet, NavLink } from "react-router-dom";
import { 
  FaChartLine, FaUsers, FaCalendarAlt, FaCreditCard, 
  FaCommentDots, FaGift, FaSignOutAlt, FaTooth, 
  FaBox
} from "react-icons/fa";

export default function KlinikLayout() {
  const menuClass = ({ isActive }) => `
    flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200
    ${isActive 
      ? "bg-[#9FB2C8] text-white shadow-sm" 
      : "text-[#1A1A1A] hover:bg-[#D9DEE3]"
    }
  `;

  const menuItems = [
    { path: "/", name: "Dashboard", icon: FaChartLine },
    { path: "/klinik/pasien", name: "Data Pasien", icon: FaUsers },
    { path: "/klinik/jadwal", name: "Penjadwalan", icon: FaCalendarAlt },
    { path: "/klinik/pembayaran", name: "Pembayaran", icon: FaCreditCard },
    { path: "/klinik/keluhan", name: "Keluhan", icon: FaCommentDots },
    { path: "/klinik/loyalitas", name: "Loyalitas", icon: FaGift },
    { path: "/klinik/ProductKlinik", name: "ProductKlinik", icon: FaBox },

  ];

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#D9DEE3] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#D9DEE3]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#9FB2C8] rounded-lg flex items-center justify-center">
              <FaTooth className="text-white text-sm" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1A1A1A]">Klinik<span className="text-[#9FB2C8]">.</span></h1>
              <p className="text-xs text-[#7A8DA3]">Gigi Permata</p>
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
                  <NavLink to={item.path} className={menuClass}>
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
              localStorage.removeItem('token');
              window.location.href = '/login';
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