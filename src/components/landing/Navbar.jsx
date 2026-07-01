import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
            KG
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Klinik Gigi Permata
            </h1>

            <p className="text-xs text-gray-500">
              Healthy Smile, Happy Life
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">

          <a href="#home" className="hover:text-blue-600 duration-200">
            Home
          </a>

          <a href="#layanan" className="hover:text-blue-600 duration-200">
            Layanan
          </a>

          <a href="#tentang" className="hover:text-blue-600 duration-200">
            Tentang
          </a>

          <a href="#kontak" className="hover:text-blue-600 duration-200">
            Kontak
          </a>

        </nav>

        {/* Button */}
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
        >
          Login
        </Link>

      </div>
    </header>
  );
}

export default Navbar;