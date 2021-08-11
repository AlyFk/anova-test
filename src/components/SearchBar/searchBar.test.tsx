import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";

test("renders search bar and works with click and enter", () => {
  const handleSubmit = jest.fn();
  render(<SearchBar onSubmit={handleSubmit} />);
  const searchText = "react";
  const input = screen.getByPlaceholderText(/search repository name.../i);
  userEvent.type(input, searchText);
  userEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(handleSubmit).toHaveBeenCalledWith(searchText);

  const searchText2 = "js";
  userEvent.clear(input)
  userEvent.type(input, searchText2);
  userEvent.type(input, "{enter}");
  expect(handleSubmit).toHaveBeenCalledWith(searchText2);
  expect(handleSubmit).toHaveBeenCalledTimes(2);
});
