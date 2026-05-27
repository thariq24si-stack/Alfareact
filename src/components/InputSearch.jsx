import { FaSearch } from "react-icons/fa";

export default function InputSearch({
  value,
  onChange,
  placeholder
}) {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-3 pl-10 border border-[#D9DEE3] rounded-lg focus:outline-none focus:border-[#9FB2C8]"
        value={value}
        onChange={onChange}
      />

      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A8DA3]" />
    </div>
  );
}