export default function StatsFlat({
  title,
  value,
  icon: Icon
}) {
  return (
    <div className="flex justify-between items-center border-b border-[#D9DEE3] pb-4">
      <div>
        <p className="text-4xl font-bold text-[#1A1A1A]">
          {value}
        </p>

        <p className="text-sm text-[#7A8DA3] mt-1">
          {title}
        </p>
      </div>

      <div className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center">
        <Icon className="text-[#9FB2C8] text-xl" />
      </div>
    </div>
  );
}