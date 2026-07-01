import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { usersAPI } from "../../services/usersAPI";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Semua field wajib diisi");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password dan Confirm Password tidak cocok!");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password minimal 8 karakter!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await usersAPI.createUser({
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
        role: "customer",
      });

      alert("Registrasi berhasil!");

      navigate("/login");

    } 
    catch (err) {
  console.error(err);
  alert(err.message);
  setError(err.message);
}
  };

  return (
    <div>

      {/* Welcome Text */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-3">
          Create Account 🎉
        </h1>

        <p className="text-[#7A8DA3] leading-relaxed">
          Today is a new day. It's your day. You shape it.
          Sign up to start managing your clinic.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 mb-5 p-3 text-sm text-red-600 rounded-xl">
          {error}
        </div>
      )}

      {loading && (
        <div className="bg-gray-100 border border-gray-200 mb-5 p-3 text-sm rounded-xl text-center">
          Creating your account...
        </div>
      )}

      <form onSubmit={handleSubmit}>

        {/* FULLNAME */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#D9DEE3] rounded-xl focus:outline-none focus:border-[#9FB2C8] focus:ring-1 focus:ring-[#9FB2C8] transition-all"
            placeholder="John Doe"
            required
          />
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#D9DEE3] rounded-xl focus:outline-none focus:border-[#9FB2C8] focus:ring-1 focus:ring-[#9FB2C8] transition-all"
            placeholder="Example@email.com"
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#D9DEE3] rounded-xl focus:outline-none focus:border-[#9FB2C8] focus:ring-1 focus:ring-[#9FB2C8] transition-all"
            placeholder="At least 8 characters"
            required
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#D9DEE3] rounded-xl focus:outline-none focus:border-[#9FB2C8] focus:ring-1 focus:ring-[#9FB2C8] transition-all"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-200"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>

      </form>

      {/* Or separator */}
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-[#D9DEE3]"></div>

        <span className="px-4 text-sm text-[#7A8DA3]">
          Or
        </span>

        <div className="flex-1 h-px bg-[#D9DEE3]"></div>
      </div>

      {/* Social Register Buttons */}
      <div className="space-y-3">

        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#D9DEE3] rounded-xl hover:bg-[#F5F7FA] transition-all">
          <FcGoogle className="text-xl" />
          <span className="text-sm text-[#1A1A1A]">
            Sign up with Google
          </span>
        </button>

        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#D9DEE3] rounded-xl hover:bg-[#F5F7FA] transition-all">
          <FaFacebook className="text-xl text-blue-600" />
          <span className="text-sm text-[#1A1A1A]">
            Sign up with Facebook
          </span>
        </button>

        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#D9DEE3] rounded-xl hover:bg-[#F5F7FA] transition-all">
          <FaApple className="text-xl text-[#1A1A1A]" />
          <span className="text-sm text-[#1A1A1A]">
            Sign up with Apple
          </span>
        </button>

      </div>

      {/* Login link */}
      <p className="text-center text-sm text-[#7A8DA3] mt-8">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-[#9FB2C8] font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>

    </div>
  );
}