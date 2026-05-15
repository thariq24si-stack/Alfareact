import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE - FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      {/* RIGHT SIDE - GAMBAR */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* GAMBAR BACKGROUND */}
        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=1000&fit=crop" 
          alt="Dental Clinic"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* OVERLAY GRADASI */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9FB2C8]/80 to-[#7A8DA3]/80"></div>
        
        {/* KONTEN DI ATAS GAMBAR */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white p-12 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8 2 4 4 4 8V16C4 20 8 22 12 22C16 22 20 20 20 16V8C20 4 16 2 12 2Z" fill="white" fillOpacity="0.8"/>
                <path d="M12 6C9 6 7 8 7 11V15C7 18 9 20 12 20C15 20 17 18 17 15V11C17 8 15 6 12 6Z" fill="white"/>
                <circle cx="9" cy="11" r="1.5" fill="#9FB2C8"/>
                <circle cx="15" cy="11" r="1.5" fill="#9FB2C8"/>
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Welcome to Klinik Permata</h2>
          <p className="text-white/90 text-lg mb-6">
            Professional Dental Care with a Smile
          </p>
          <p className="text-white/70 text-sm">
            Sign in to manage your clinic dashboard
          </p>
        </div>
      </div>
    </div>
  );
}