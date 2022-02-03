import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center p-2 items-center md:items-start  h-full md:h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col items-center md:w-3/4">
        <h1 className="text-sky-500  font-title mt-28 md:mt-40 text-6xl uppercase md:hover:text-white">
          Pokemon world
        </h1>
        <span className="w-3/4 mt-10 font-body  text-gray-300">
          The world’s greatest Pokémon Master is waiting for me! Let’s use our
          Pokémon to get to that island! Make your wonderful dream a reality, it
          will become your truth. If anyone can, it’s you.
        </span>
        <span className=" font-serif text-zinc-50  text-bol uppercase">
          -Ash Ketchum
        </span>
        <button className="mt-5 btn text-sky-500 border-sky-500 border-2 hover:bg-sky-500 hover:text-white transition ease-out duration-500">
          click here
        </button>
      </div>
      <div className="flex w-1/2 md:w-1/4 ">
        <img
          className="h-3/4 mt-16 "
          src={
            "https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/9.svg"
          }
        />
      </div>
    </div>
  );
};

export default Hero;
