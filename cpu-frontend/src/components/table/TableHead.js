export default function TableHead({ headers }) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
      <tr>
        {headers.map((header, index) => (
          <th key={index} scope="col" className="px-6 py-3">
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
