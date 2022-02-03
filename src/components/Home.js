import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await res.json();

      const createPokemon = (results) => {
        results.forEach(async (pokemon) => {
          const result = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const newPokemon = await result.json();

          setPokemons((current) => [...current, newPokemon]);
        });
      };
      createPokemon(data.results);
      console.log(pokemons[0]);
      console.log(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("useeffect ran");
    //as pokemons have pokemons from previous render so remove it
    setPokemons([]);
    console.log(pokemons);
    getPokemon();
  }, []);
  return (
    <>
      <div className=" h-fit p-2 gap-x-4 gap-y-4 bg-gradient-to-r from-rose-100 to-teal-100 md:p-5 grid md:gap-4 grid-cols-1 md:grid-cols-3">
        {pokemons.map((pokemon) => {
          return (
            <Pokemon
              photo={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              key={pokemon.name}
            />
          );
        })}
      </div>
      <div className="flex justify-center  bg-gradient-to-r from-rose-100 to-teal-100  w-full">
        <button className="btn  w-fit mt-4 mb-4 border-orange-500 text-orange-500 border--500 border-2 hover:bg-orange-500 hover:text-white transition ease-out duration-500">
          Load More
        </button>
      </div>
    </>
  );
};

export default Home;
