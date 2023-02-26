import { Button } from "flowbite-react";
import { fetchAllCPUs, fillExampleCPU } from "./functions";
export default function FillDataButton({ setData }) {
  const handleNewCPU = () => {
    fillExampleCPU()
      .then((res) => {
        console.log(res);
        fetchAllCPUs().then((data) => setData(data));
      })
      .catch((error) => console.log(error));
  };
  return <Button onClick={handleNewCPU}>Fill Data</Button>;
}
