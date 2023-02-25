import { Button, Modal, TextInput, Label, Select } from "flowbite-react";
import { useState } from "react";

export default function CPUEditInfoModal(props) {
  const onClick = () => {
    setDataSaved(true);
  };
  const onClose = () => {
    props.setShowModal(false);
    setDataSaved(false);
  };
  const onDiscard = () => {
    props.setShowModal(false);
    setDataSaved(false);
  };
  const [formData, setFormData] = useState({
    clockspeed: props.clockspeed,
    cores: props.cores,
    tdp: props.tdp,
    socket: props.socket,
    clockspeed_unit: props.clockspeed_unit,
    threads: props.threads,
    price_EUR: props.price_EUR,
    buy_link: props.buy_link,
  });
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const [dataSaved, setDataSaved] = useState(false);
  return (
    <>
      <Modal show={props.showModal} onClose={onClose}>
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
                <option>Socket 2</option>
              </Select>
            </div>

            <div className="mx-4">
              <Label
                htmlFor="clock-speed-unit"
                value="Select ClockSpeed Unit"
              />
              <Select
                name="clockspeed_unit"
                value={formData.clockspeed_unit}
                onChange={onInputChange}
                required={true}
              >
                <option>{props.clockspeed_unit}</option>
                <option>MHz</option>
              </Select>

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
                name="price_EUR"
                type="number"
                placeholder={props.price_EUR}
                value={formData.price_EUR}
                onChange={onInputChange}
                required={true}
              />

              <Label htmlFor="buy-link" value="Buy Link" />
              <TextInput
                name="buy_link"
                type="url"
                placeholder={props.buy_link}
                value={formData.buy_link}
                onChange={onInputChange}
                required={true}
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onClick}>Save Changes</Button>
          <Button color="gray" onClick={onDiscard}>
            Discard
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
