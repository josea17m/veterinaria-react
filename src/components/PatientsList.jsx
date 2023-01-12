import Patient from "./Patient";

function PatientsList() {
  return (
    <div className="mt-4 md:w-1/2 lg:w-3/5 md:h-screen ">
      <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
      <p className="text-xl mt-2 mb-2 text-center">
        Administras tus
        <span className="font-bold text-lg text-indigo-600">
          {" "}pacientes y citas
        </span>
      </p>
      <div className="md:h-screen overflow-y-scroll ">
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      </div>
    </div>
  );
}

export default PatientsList;
