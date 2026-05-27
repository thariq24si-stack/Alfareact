export default function SectionTitle({
  title,
  icon: Icon
}) {
  return (
    <h3 className="font-semibold mb-4 flex items-center text-[#1A1A1A]">
      {Icon && <Icon className="mr-2 text-[#9FB2C8]" />}
      {title}
    </h3>
  );
}