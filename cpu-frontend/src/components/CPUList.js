import { useEffect, useState } from "react";
import TableComponent from "./table/TableComponent";
import TableHead from "./table/TableHead";
import { Spinner } from "flowbite-react";

export default function CPUList() {
  const [data, setData] = useState(null);
  const headers = [
    { label: "CPU Brand" },
    { label: "Model" },
    { label: "Socket" },
    { label: "Action" },
  ];
  useEffect(() => {
    setTimeout(() => {
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.CPUs);
          setData(data.CPUs);
        });
    }, 500);
  }, []);
  return (
    <div className="flex justify-center">
      {data ? (
        <div className="relative mt-5 overflow-x-auto">
          <h1 className="text-4xl mb-5 font-extrabold text-center">
            CPU List - Nubedian
          </h1>

          <div className="shadow-md sm:rounded-lg">
            <table
              className="w-full text-sm text-left text-gray-500 border-gray-200 
          border"
            >
              <TableHead headers={headers} />
              <tbody>
                {data ? (
                  <>
                    {data.map((item) => (
                      <TableComponent {...item} key={item.id} />
                    ))}
                  </>
                ) : (
                  <tr>
                    <td colSpan="4"></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Spinner size="xl" />
        </div>
      )}
    </div>
  );
}
