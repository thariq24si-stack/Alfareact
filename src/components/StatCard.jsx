export default function StatCard({
  title,
  value,
  icon: Icon,
  gradient
}) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} rounded-xl p-5 text-white shadow-lg`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold">
            {value}
          </p>

          <p className="text-sm text-white/80 mt-1">
            {title}
          </p>
        </div>

        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <Icon className="text-2xl" />
        </div>
      </div>
    </div>
  );
}