import React from "react";

const Pokemon = ({ name, id, photo }) => {
  return (
    <div className="h-48 p-2 w-auto ml-5 mr-5 md:ml-0 md:mr-0 md:w-full mt-5 card bg-gradient-to-r from-teal-200 to-lime-200 flex flex-col justify-center items-center">
      <img className="h-36" src={photo} alt="" />
      <h1 className="font-serif uppercase bold text-gray-600 mt-5">{name}</h1>
    </div>
  );
};

export default Pokemon;
