import { render, screen } from "@testing-library/react";
import PokemonInfo from "../components/PokemonInfo";
import Pokeball from "../assets/images/pokeball.png";

const PokeData = {
  id: 1,
  name: "bulbasaur",
  image: Pokeball,
  types: [
    {
      type: "grass",
    },
    {
      type: "poison",
    },
  ],
  abilities: [
    {
      ability: "overgrow",
    },
    {
      ability: "chlorophyll",
    },
  ],
  stats: [
    {
      name: "hp",
      value: 45,
    },
    {
      name: "attack",
      value: 49,
    },
    {
      name: "defense",
      value: 49,
    },
    {
      name: "special-attack",
      value: 65,
    },
    {
      name: "special-defense",
      value: 65,
    },
    {
      name: "speed",
      value: 45,
    },
  ],
};

describe("<PokemonInfo />", () => {
  test("displays pokemon detailed data", () => {
    render(<PokemonInfo data={PokeData} />);

    const name = screen.getByRole("heading", { level: 1 });
    const image = screen.getByRole("img", { name: "bulbasaur" });
    const ability = screen.getByText(/overgrow/i);
    const hp = screen.getByText(/hp :/i);
    const attack = screen.getByText((content) =>
      content.startsWith("attack :")
    );
    const defense = screen.getByText((content) =>
      content.startsWith("defense :")
    );

    expect(name).toHaveTextContent(/bulbasaur/i);
    expect(image).toBeInTheDocument();
    expect(ability).toHaveTextContent(/overgrow/i);
    expect(hp).toBeInTheDocument();
    expect(attack).toBeInTheDocument();
    expect(defense).toBeInTheDocument();
  });
});
