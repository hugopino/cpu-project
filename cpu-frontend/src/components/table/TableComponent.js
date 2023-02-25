import { Link } from "react-router-dom";
import ComponentTH from "./ComponentTH";

export default function TableComponent(props) {
  return (
    <tr className="bg-white border-b">
      <ComponentTH title={props.brand} />
      <td className="px-6 py-4">{props.model}</td>
      <td className="px-6 py-4">{props.socket}</td>
      <td className="px-6 py-4">
        <Link
          to={"cpu/" + props.id}
          className="font-medium text-blue-600  hover:underline"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
