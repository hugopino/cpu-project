export default function ComponentTH({ title }) {
  return (
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
    >
      {title}
    </th>
  );
}
