import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";
import "./index.css";

function App() {
  const [pacientes, setPacientes] = useState([]);


  return (
    <div className="container mx-2">
      <Header />

      <div className="mt-12 md:flex">
        <Form 
        pacientes={pacientes}
        setPacientes={setPacientes}/>
        <PatientsList />
      </div>
    </div>
  );
}

export default App;
