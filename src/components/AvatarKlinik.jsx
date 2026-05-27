// AvatarKlinik.jsx

export default function AvatarKlinik({
  name = "Pasien",
  size = "md",
}) {
  const initials = name
    ?.split(" ")
    ?.map((n) => n.charAt(0))
    ?.join("")
    ?.substring(0, 2)
    ?.toUpperCase();

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
  };

  return (
    <div
      className={`
        ${sizes[size]}
        rounded-full
        bg-gradient-to-br
        from-[#9FB2C8]
        to-[#7A8DA3]
        text-white
        flex
        items-center
        justify-center
        font-semibold
      `}
    >
      {initials}
    </div>
  );
}