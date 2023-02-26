import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { fetchAllCPUs } from "./functions";
import AppHeader from "./AppHeader";
import Table from "./table/Table";
import FillDataButton from "./FillDataButton";
export default function CPUList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetchAllCPUs().then((data) => setData(data));
    }, 400);
  }, []);

  return (
    <div className="flex justify-center">
      {data ? (
        <div className="relative mt-5 overflow-x-auto">
          <AppHeader />
          <div className="justify-center flex mb-3">
            <FillDataButton data={data} setData={setData} />
          </div>
          <div className="shadow-md sm:rounded-lg">
            <Table data={data} />
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
