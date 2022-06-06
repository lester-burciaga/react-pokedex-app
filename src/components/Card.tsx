import { Dispatch, SetStateAction } from 'react';
import { Pokemon } from '@model/types';

interface IProps {
  pokemons: Pokemon[];
  loading: boolean;
  pokedex?: Pokemon;
  setInfoPokemon: Dispatch<SetStateAction<Pokemon>>;
}

function Card({ pokemons, loading, pokedex, setInfoPokemon }: IProps) {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemons.map((item: Pokemon) => {
          return (
            <div
              className={`pokemonCard ${item.types[0].type}`}
              key={item.id}
              role='pokemonCard'
              aria-label={`${item.id}${item.name}`}
              onClick={() => setInfoPokemon(item)}
            >
              <div className='description'>
                <p className='cardName'>
                  <span>
                    <small>Id: {item.id}</small>&emsp;{item.name}
                  </span>
                </p>
                <div className='types'>
                  {item.types.map((types, index) => {
                    return (
                      <div key={index} className='pokemonType'>
                        {types.type}
                      </div>
                    );
                  })}
                </div>
              </div>
              <img
                src={item.image}
                height={100}
                width={100}
                className='pokemonImage'
                alt={item.name}
              />
            </div>
          );
        })
      )}
    </>
  );
}

export default Card;
