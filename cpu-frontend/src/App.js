import CPUList from "./components/CPUList";
import { Route, Routes } from "react-router-dom";
import CPUModel from "./components/CPU/CPUModel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CPUList />} />
        <Route path="/cpu/:id" element={<CPUModel />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
