import TableHead from "./TableHead";
import TableComponent from "./TableComponent";
export default function Table({ data }) {
  const headers = [
    { label: "CPU Brand" },
    { label: "Model" },
    { label: "Socket" },
    { label: "Action" },
  ];
  return (
    <table
      className="w-full text-sm text-left text-gray-500 border-gray-200 
          border"
    >
      <TableHead headers={headers} />
      <tbody>
        {data.map((item) => (
          <TableComponent {...item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
