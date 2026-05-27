export default function CardGradient({
  children,
  gradient = "from-[#9FB2C8] to-[#7A8DA3]"
}) {
  return (
    <div
      className={`bg-gradient-to-r ${gradient} rounded-xl p-5 text-white shadow-lg`}
    >
      {children}
    </div>
  );
}