import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple, FaMicrosoft } from "react-icons/fa";

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
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataForm.email || !dataForm.password) {
      setError("Username and password required");
      return;
    }

    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/auth/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        localStorage.setItem("token", response.data.token);
        navigate("/klinik");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Invalid credentials");
        } else {
          setError("Terjadi kesalahan");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const errorInfo = error ? (
    <div className="bg-red-50 border border-red-200 mb-5 p-3 text-sm text-red-600 rounded-lg flex items-center">
      <BsFillExclamationDiamondFill className="text-red-500 me-2" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-100 border border-gray-200 mb-5 p-3 text-sm rounded-lg flex items-center justify-center">
      <ImSpinner2 className="me-2 animate-spin text-[#9FB2C8]" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div>
      {/* Welcome Text */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1A1A]">Welcome Back 🎉</h1>
        <p className="text-[#7A8DA3] text-sm mt-2">
          Today is a new day. It's your day. You shape it.
          <br />
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
            type="text"
            name="email"
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
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#D9DEE3] rounded-xl focus:outline-none focus:border-[#9FB2C8] focus:ring-1 focus:ring-[#9FB2C8] transition-all"
            placeholder="At least 8 characters"
          />
        </div>

        <div className="text-right mb-6">
          <Link to="/forgot" className="text-sm text-[#9FB2C8] hover:underline">
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
        <span className="px-4 text-sm text-[#7A8DA3]">Or</span>
        <div className="flex-1 h-px bg-[#D9DEE3]"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#D9DEE3] rounded-xl hover:bg-[#F5F7FA] transition-all">
          <FcGoogle className="text-xl" />
          <span className="text-sm text-[#1A1A1A]">Sign in with Google</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#D9DEE3] rounded-xl hover:bg-[#F5F7FA] transition-all">
          <FaFacebook className="text-xl text-blue-600" />
          <span className="text-sm text-[#1A1A1A]">Sign in with Facebook</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#D9DEE3] rounded-xl hover:bg-[#F5F7FA] transition-all">
          <FaApple className="text-xl text-[#1A1A1A]" />
          <span className="text-sm text-[#1A1A1A]">Sign in with Apple</span>
        </button>
      </div>

      {/* Sign up link */}
      <p className="text-center text-sm text-[#7A8DA3] mt-8">
        Don't you have an account?{" "}
        <Link to="/register" className="text-[#9FB2C8] font-medium hover:underline">
          Sign up
        </Link>
      </p>

      <p className="text-center text-xs text-[#7A8DA3] mt-6">
        Demo: emilys / emilyspass
      </p>
    </div>
  );
}