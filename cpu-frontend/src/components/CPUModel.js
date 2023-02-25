import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CPUEditInfoModal from "./Modal/CPUEditInfoModal";
import { Button, Spinner } from "flowbite-react";

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
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id, navigate]);
  const cpuProps = cpuData || props;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {!loading ? (
        <>
          <CPUEditInfoModal
            {...cpuProps}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <div className="flex justify-center items-center h-screen">
            <div className="max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow  inline-block">
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-90">
                  {cpuProps.model} - {cpuProps.brand}
                </h5>
              </a>
              <ul className="mb-3 font-normal">
                <li>Socket: {cpuProps.socket}</li>
                <li>
                  Cock Speed: {cpuProps.clockspeed} {cpuProps.clockspeed_unit}
                </li>
                <li>Cores: {cpuProps.cores}</li>
                <li>Threads: {cpuProps.threads}</li>
                <li>TDP: {cpuProps.tdp}</li>
                <li>Price: {cpuProps.price_EUR} €</li>
              </ul>
              <div className="flex justify-around">
                <Link to="/">
                  <Button>Home</Button>
                </Link>

                <Button onClick={() => setShowModal(true)}>Edit</Button>

                <Link to={cpuProps.buy_link}>
                  <Button>Buy</Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Spinner size="xl" />
        </div>
      )}
    </>
  );
}
