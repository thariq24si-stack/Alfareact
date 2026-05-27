export default function TableWrapper({
  children
}) {
  return (
    <div className="bg-white rounded-xl border border-[#D9DEE3] overflow-hidden">
      {children}
    </div>
  );
}