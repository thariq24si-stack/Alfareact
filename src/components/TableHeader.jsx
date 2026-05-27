

export default function TableHeader({
  columns = [],
}) {
  return (
    <thead className="bg-gradient-to-r from-[#9FB2C8] to-[#7A8DA3] text-white">
      <tr>
        {columns.map((col, idx) => (
          <th
            key={idx}
            className="p-3 text-left font-medium"
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}