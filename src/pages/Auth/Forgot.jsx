import { useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email harus diisi!");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    setTimeout(() => {
      setMessage(`Link reset password telah dikirim ke ${email}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2 text-center">
        Forgot Your Password?
      </h2>
      
      <p className="text-sm text-[#7A8DA3] mb-6 text-center">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 mb-5 p-3 text-sm text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {message && (
        <div className="bg-green-50 border border-green-200 mb-5 p-3 text-sm text-green-600 rounded-lg">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 bg-[#F5F7FA] border border-[#D9DEE3] rounded-lg focus:outline-none focus:border-[#9FB2C8] focus:ring-1 focus:ring-[#9FB2C8] transition-all"
            placeholder="you@example.com"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#9FB2C8] hover:bg-[#7A8DA3] text-white font-semibold py-2.5 rounded-lg transition-all duration-200"
        >
          {loading ? "Mengirim..." : "Send Reset Link"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <a href="/login" className="text-[#9FB2C8] hover:underline">Kembali ke Login</a>
      </div>
    </div>
  );
}