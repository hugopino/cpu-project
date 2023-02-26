export const fetchAllCPUs = () => {
  return fetch(`${process.env.REACT_APP_API_URL}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const fillExampleCPU = () => {
  return generateRandomCPU().then((cpuJSON) => {
    return fetch(`${process.env.REACT_APP_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cpuJSON),
    });
  });
};

export const generateRandomCPU = () => {
  return fetch("/db.json")
    .then((response) => response.json())
    .then((data) => {
      const cpus = data.CPUs;
      const randomIndex = Math.floor(Math.random() * cpus.length);
      const randomCPU = cpus[randomIndex];
      return randomCPU;
    })
    .catch((error) => console.log(error));
};
