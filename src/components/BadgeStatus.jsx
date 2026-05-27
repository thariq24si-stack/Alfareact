export default function BadgeStatus({
  status
}) {

  return (
    <span
      className={`px-2 py-1 rounded text-xs text-white ${
        status === "confirmed" ||
        status === "lunas"
          ? "bg-green-500"

          : status === "pending" ||
            status === "proses"
          ? "bg-yellow-500"

          : status === "Gold"
          ? "bg-yellow-500"

          : status === "Silver"
          ? "bg-gray-400"

          : status === "Bronze"
          ? "bg-orange-500"

          : "bg-gray-500"
      }`}
    >
      {status}
    </span>
  );
}