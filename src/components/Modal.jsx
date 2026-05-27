export default function Modal({
  children,
  title,
  onClose,
  maxWidth = "max-w-md",
}) {

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

      <div
        className={`bg-white rounded-2xl shadow-xl w-full ${maxWidth} p-6 relative`}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-bold text-[#1A1A1A]">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black text-xl"
          >
            ✕
          </button>

        </div>

        {/* CONTENT */}
        {children}

      </div>

    </div>
  );
}