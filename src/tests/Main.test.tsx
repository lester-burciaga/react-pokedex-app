import { render, screen } from "@testing-library/react";
import Main from "../components/Main";

describe("<Main />", () => {
  test("renders Main component with loading message", async () => {
    render(<Main />);

    const loadingMessage = screen.getByText(/loading.../i);
    const name = screen.getByText(/pokedex/i);

    expect(loadingMessage).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
