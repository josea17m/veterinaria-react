const Patient = () => {
  return (
    <div className="mx-2 mt-1 mb-3  bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre de la mascota:
        <span className="font-normal normal-case"> Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre del dueño:
        <span className="font-normal normal-case"> Jose</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:
        <span className="font-normal normal-case"> ejemplo@ejemplo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta:
        <span className="font-normal normal-case"> 10/01/23</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:
        <span className="font-normal normal-case">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magnam
          quo earum, nesciunt ex ad sint magni. Dignissimos molestias inventore
          animi vel tempora nihil, aperiam ipsum, officiis dolorum maxime quia.
        </span>
      </p>
    </div>
  );
};

export default Patient;
