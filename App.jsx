import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Leclub from "./pages/Leclub";
import Menu from "./components/Menu";
import Activite from "./pages/Activite";

function App() {
  const [technos, setTechnos] = useState([]);

  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
  }
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/Leclub" element={<Activite />} />
        <Route path="/Activite" element={<Leclub />} />
      </Routes>
    </>
  );
}

export default App;
