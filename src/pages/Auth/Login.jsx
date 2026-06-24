import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { usersAPI } from "../../services/usersAPI";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataForm.email || !dataForm.password) {
      setError("Email dan Password wajib diisi");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await usersAPI.login(
        dataForm.email,
        dataForm.password
      );

      if (result.length === 0) {
        setError("Email atau Password salah");
        return;
      }

      // simpan user login
      localStorage.setItem(
        "user",
        JSON.stringify(result[0])
      );

      navigate("/klinik");
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? (
    <div className="mb-4 flex items-center gap-2 bg-red-100 text-red-700 px-4 py-3 rounded-xl">
      <BsFillExclamationDiamondFill />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="mb-4 flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-3 rounded-xl">
      <ImSpinner2 className="animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div className="w-full max-w-md mx-auto">

      {/* Welcome Text */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-3">
          Welcome Back 🎉
        </h1>

        <p className="text-[#7A8DA3] leading-relaxed">
          Today is a new day. It's your day. You shape it.
          Sign in to start managing your clinic.
        </p>
      </div>

      {errorInfo}
      {loadingInfo}

      {/* Form */}
      <form onSubmit={handleSubmit}>

        <div className="mb-5">
          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#D9DEE3] rounded-xl focus:outline-none focus:border-[#9FB2C8] focus:ring-1 focus:ring-[#9FB2C8] transition-all"
            placeholder="Example@email.com"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#D9DEE3] rounded-xl focus:outline-none focus:border-[#9FB2C8] focus:ring-1 focus:ring-[#9FB2C8] transition-all"
            placeholder="At least 8 characters"
          />
        </div>

        <div className="text-right mb-6">
          <Link
            to="/forgot"
            className="text-sm text-[#9FB2C8] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-200"
        >
          {loading ? "Signing in..." : "Sign in"}
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

      {/* Social Login */}
      <div className="space-y-3">

        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#D9DEE3] rounded-xl hover:bg-[#F5F7FA] transition-all">
          <FcGoogle className="text-xl" />
          <span className="text-sm text-[#1A1A1A]">
            Sign in with Google
          </span>
        </button>

        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#D9DEE3] rounded-xl hover:bg-[#F5F7FA] transition-all">
          <FaFacebook className="text-xl text-blue-600" />
          <span className="text-sm text-[#1A1A1A]">
            Sign in with Facebook
          </span>
        </button>

        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#D9DEE3] rounded-xl hover:bg-[#F5F7FA] transition-all">
          <FaApple className="text-xl text-[#1A1A1A]" />
          <span className="text-sm text-[#1A1A1A]">
            Sign in with Apple
          </span>
        </button>

      </div>

      {/* Register */}
      <p className="text-center text-sm text-[#7A8DA3] mt-8">
        Don't you have an account?{" "}
        <Link
          to="/register"
          className="text-[#9FB2C8] font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>

    </div>
  );
}