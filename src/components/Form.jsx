import { useState, useEffect } from 'react'

function Form() {
  return (
    <div className="mt-5 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
      <p className="text-xl mt-2 text-center mb-2">
        Añade pacientes y
        <span className="font-bold text-lg text-indigo-600">
          {" "}
          adminístralos
        </span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            className="focus:outline-none border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="name-dueno"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del dueño
          </label>
          <input
            id="name-dueno"
            type="text"
            placeholder="Nombre"
            className="focus:outline-none border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="ejemplo@ejemplo.com"
            className="focus:outline-none border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta
          </label>
          <input
            id="alta"
            type="date"
            className="focus:outline-none border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea id="sintomas" className="focus:outline-none border-2 rounded-md block text-gray-700 w-full"></textarea>
        </div>

        <input type="submit"
        className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-all"
        value={"Agregar paciente"}/>
        
      </form>
    </div>
  );
}

export default Form;
