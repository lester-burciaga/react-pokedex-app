import Pokeball from "../assets/images/pokeball.png";

const mockResponse = {
  data: {
    next: "",
    previous: "",
    results: [
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
        abilities: [
          {
            ability: "overgrow",
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
        ],
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
