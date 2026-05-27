export default function InputField({
  type = "text",
  placeholder,
  value,
  onChange
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 border rounded-lg mb-3"
      value={value}
      onChange={onChange}
    />
  );
}