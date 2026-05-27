export default function CardPutih({
  children,
  className = ""
}) {
  return (
    <div
      className={`bg-white rounded-xl border border-[#D9DEE3] p-5 ${className}`}
    >
      {children}
    </div>
  );
}