import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CPUEditInfoModal from "../Modal/CPUEditInfoModal";
import { Button, Spinner } from "flowbite-react";
import CPUData from "./CPUData";

export default function CPUModel(props) {
  const { id } = useParams();
  const [cpuData, setCpuData] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCpuData(data);
        setLoading(false);
      })
      .catch((error) => navigate("/"));
  }, [id, navigate, showModal]);
  const cpuProps = cpuData || props;

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

              <CPUData cpuProps={cpuProps} />

              <div className="flex justify-around">
                <Link to="/">
                  <Button>Home</Button>
                </Link>

                <Button onClick={() => setShowModal(true)}>Edit</Button>

                <Link to={cpuProps.buyLink}>
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
