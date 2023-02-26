export const updateData = (props, formData, setDataSaved) => {
  console.log(props.id);
  fetch(`${process.env.REACT_APP_API_URL}/${props.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => console.log(response.status))
    .catch((error) => console.log(error));
  setDataSaved(true);
};

export const closeModal = (props, setDataSaved) => {
  props.setShowModal(false);
  setDataSaved(false);
};

export const deleteData = (props, navigate) => {
  fetch(`${process.env.REACT_APP_API_URL}/${props.id}`, {
    method: "DELETE",
  })
    .then((response) => console.log(response.status))
    .catch((error) => console.log(error));
  props.setShowModal(false);
  navigate("/");
};
