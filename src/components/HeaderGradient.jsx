export default function HeaderGradient({
  title,
  breadcrumb
}) {
  return (
    <div className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] rounded-xl p-6 mb-6 text-white">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
        <span>Home</span>
        <span>/</span>
        <span>{breadcrumb}</span>
      </div>
    </div>
  );
}