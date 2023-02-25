import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function CPUModel(props) {
  const { id } = useParams();
  const [cpuData, setCpuData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        console.log();
        const cpu = data.CPUs.find((cpu) => cpu.id === id);
        if (!cpu) navigate("/");
        setCpuData(cpu);
      })
      .catch((error) => console.error(error));
  }, [id]);
  const cpuProps = cpuData || props;
  return (
    <div className="max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow  inline-block">
      <a href="/#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-90">
          {cpuProps.model} - {cpuProps.brand}
        </h5>
      </a>
      <ul className="mb-3 font-normal">
        <li>Socket: {cpuProps.socket}</li>
        <li>Cock Speed: {cpuProps.clockspeed}</li>
        <li>Cores: {cpuProps.cores}</li>
        <li>Threads: {cpuProps.threads}</li>
        <li>TDP: {cpuProps.tdp}</li>
        <li>Price: {cpuProps.price_EUR} €</li>
      </ul>
      <Link
        to="/"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
      >
        Go Home
      </Link>
    </div>
  );
}
