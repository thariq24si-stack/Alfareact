export default function ButtonGradient({
  children,
  onClick,
  className = "",
  type = "button"
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white px-4 py-2 rounded-lg hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}