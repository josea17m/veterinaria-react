const Error = ({ mensaje }) => {
  return (
    <div className="w-full bg-red-700 text-white shadow-md rounded-lg p-3 uppercase font-bold text-center m-2">
      <p> { mensaje } </p>
    </div>
  );
};

export default Error;
