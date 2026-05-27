export default function EmptyState({
  text = "Data tidak tersedia"
}) {
  return (
    <div className="text-center py-10 text-[#7A8DA3]">
      {text}
    </div>
  );
}