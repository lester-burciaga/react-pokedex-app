export type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
};

export type PokemonType = {
  type: string;
};

export type PokemonAbility = {
  ability: string;
};

export type PokemonStat = {
  name: string;
  value: number;
};
