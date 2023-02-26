export default function CPUData({ cpuProps }) {
  return (
    <ul className="mb-3 font-normal">
      <li>Socket: {cpuProps.socket}</li>
      <li>
        Cock Speed: {cpuProps.clockspeed} {cpuProps.clockspeed_unit}
      </li>
      <li>Cores: {cpuProps.cores}</li>
      <li>Threads: {cpuProps.threads}</li>
      <li>TDP: {cpuProps.tdp}</li>
      <li>Price: {cpuProps.price} €</li>
    </ul>
  );
}
