import { Button, Modal, TextInput, Label, Select } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateData, closeModal, deleteData } from "./modalFunctions";

export default function CPUEditInfoModal(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: props.id,
    model: props.model,
    clockspeed: props.clockspeed,
    brand: props.brand,
    cores: props.cores,
    tdp: props.tdp,
    socket: props.socket,
    clockspeedUnit: props.clockspeedUnit,
    aviableSockets: props.aviableSockets,
    threads: props.threads,
    price: props.price,
    buyLink: props.buyLink,
  });
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const [dataSaved, setDataSaved] = useState(false);
  return (
    <>
      <Modal
        show={props.showModal}
        onClose={() => closeModal(props, setDataSaved)}
      >
        <Modal.Header>
          Edit {props.brand} {props.model}
          {dataSaved && (
            <div className="bg-teal-100 rounded-sm text-base text-teal-900 px-2 block">
              Data Saved!
            </div>
          )}
        </Modal.Header>
        <Modal.Body>
          <form className="flex flex-row">
            <div className="mx-4">
              <Label htmlFor="clockspeed" value="Clock Speed" />
              <TextInput
                name="clockspeed"
                type="number"
                step="0.1"
                placeholder={props.clockspeed}
                value={formData.clockspeed}
                onChange={onInputChange}
                required={true}
              />

              <Label htmlFor="cores" value="Cores" />
              <TextInput
                name="cores"
                type="number"
                placeholder={props.cores}
                value={formData.cores}
                onChange={onInputChange}
                required={true}
              />

              <Label htmlFor="tdp" value="TDP" />
              <TextInput
                name="tdp"
                type="number"
                placeholder={props.tdp}
                value={formData.tdp}
                onChange={onInputChange}
                required={true}
              />

              <Label htmlFor="socket" value="Socket" />
              <Select
                name="socket"
                value={formData.socket}
                onChange={onInputChange}
                required={true}
              >
                <option>{props.socket}</option>

                {props.aviableSockets
                  .filter((socket) => socket !== props.socket)
                  .map((socket) => {
                    return <option key={socket}>{socket}</option>;
                  })}
              </Select>
            </div>

            <div className="mx-4">
              <Label htmlFor="clockspeedUnit" value="ClockSpeed Unit" />
              <TextInput
                name="clockspeedUnit"
                type="text"
                placeholder={props.clockspeedUnit}
                value={formData.clockspeedUnit}
                onChange={onInputChange}
                required={true}
              />

              <Label htmlFor="threads" value="Threads" />
              <TextInput
                name="threads"
                type="number"
                placeholder={props.threads}
                value={formData.threads}
                onChange={onInputChange}
                required={true}
              />

              <Label htmlFor="price" value="€ Price" />
              <TextInput
                name="price"
                type="number"
                placeholder={props.price}
                value={formData.price}
                onChange={onInputChange}
                required={true}
              />

              <Label htmlFor="buyLink" value="Buy Link" />
              <TextInput
                name="buyLink"
                type="url"
                placeholder={props.buyLink}
                value={formData.buyLink}
                onChange={onInputChange}
                required={true}
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => updateData(props, formData, setDataSaved)}>
            Save Changes
          </Button>
          <Button color="failure" onClick={() => deleteData(props, navigate)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
