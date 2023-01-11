import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";
import "./index.css";

function App() {
  return (
    <div className="container mx-2">
      <Header />

      <div className="mt-12 md:flex">
        <Form />
        <PatientsList />
      </div>
    </div>
  );
}

export default App;
