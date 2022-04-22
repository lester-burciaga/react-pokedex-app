import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";
import PokemonInfo from "../components/PokemonInfo";

import {
  Pokemon,
  PokemonType,
  PokemonAbility,
  PokemonStat,
} from "../types/types";
import Pokeball from "../images/pokeball.png";

const PokemonData: Pokemon = {
  id: 0,
  name: "Pokedex",
  image: Pokeball,
  types: [],
  abilities: [],
  stats: [],
};

function Main() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokeData, setPokeData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  const [pokedex, setPokedex] = useState<Pokemon>(PokemonData);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  const getPokemonList = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  function getTypes(types: any[]): PokemonType[] {
    const res: PokemonType[] = [];
    types.map((type) => res.push({ type: type.type.name }));
    return res;
  }

  function getAbilities(abilities: any[]): PokemonAbility[] {
    const res: PokemonAbility[] = [];
    abilities.map((ability) => res.push({ ability: ability.ability.name }));
    return res;
  }

  function getStats(stats: any[]): PokemonStat[] {
    const res: PokemonStat[] = [];
    stats.map((stat) =>
      res.push({ name: stat.stat.name, value: stat.base_stat })
    );
    return res;
  }

  const getPokemon = async (res: any[]) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((prev) => {
        prev = [
          ...prev,
          {
            id: result.data.id,
            name: result.data.name,
            image: result.data.sprites.other.dream_world.front_default,
            types: getTypes(result.data.types),
            abilities: getAbilities(result.data.abilities),
            stats: getStats(result.data.stats),
          },
        ];
        prev.sort((a, b) => (a.id > b.id ? 1 : -1));
        return prev;
      });
    });
  };

  useEffect(() => {
    getPokemonList();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="left_content">
          <Card
            pokemons={pokeData}
            loading={loading}
            setInfoPokemon={setPokedex}
          />
          <div className="btn_group">
            {prevUrl && (
              <button
                className="btn_navigation"
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}
            {nextUrl && (
              <button
                className="btn_navigation"
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="right_content">
          <PokemonInfo data={pokedex} />
        </div>
      </div>
    </>
  );
}

export default Main;
