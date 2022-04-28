import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../components/Card";
import Pokeball from "../assets/images/pokeball.png";

const PokeData = [
  {
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
    abilities: [],
    stats: [],
  },
];

const mockPokedex = jest.fn();

describe("<Card />", () => {
  test("should render loading message when loading its true", () => {
    render(
      <Card pokemons={PokeData} loading={true} setInfoPokemon={mockPokedex} />
    );

    const loadingMessage = screen.getByRole("heading", { level: 1 });
    expect(loadingMessage).toHaveTextContent(/loading.../i);
  });

  test("renders Card component with pokemon data", () => {
    render(
      <Card pokemons={PokeData} loading={false} setInfoPokemon={mockPokedex} />
    );
    const idLabel = screen.getByText(/id: 1/i);
    const name = screen.getByText(/bulbasaur/i);
    const type = screen.getByText(/grass/i);
    const image = screen.getByRole("img", { name: "bulbasaur" });
    const pokemonCard = screen.getByRole("pokemonCard", { name: "1bulbasaur" });

    expect(idLabel).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(image).toBeInTheDocument();

    fireEvent.click(pokemonCard);
    expect(mockPokedex).toHaveBeenCalledTimes(1);
  });
});
