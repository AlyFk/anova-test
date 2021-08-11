import React from "react";
import { render, screen } from "@testing-library/react";
import Repository from "../Repository";
import userEvent from "@testing-library/user-event";
import nock from "nock";
import repositoriesData from "test-utils/mock-data";
import ReactQueryProvider from "providers/react-query-provider";

test("render repository page and show repository", async () => {
  const scope = nock("https://api.github.com/search")
    .defaultReplyHeaders({
      "access-control-allow-origin": "*",
    })
    .get("/repositories")
    .query({ q: "react in:name", sort: "stars", order: "desc", page: "1" })
    .reply(200, { ...repositoriesData });

  render(<Repository />, { wrapper: ReactQueryProvider });
  const searchText = "react";
  const input = screen.getByPlaceholderText(/search repository name.../i);
  userEvent.type(input, searchText);
  userEvent.click(screen.getByRole("button", { name: /submit/i }));

  const spinner = await screen.findByTestId("loading");
  expect(spinner).toBeInTheDocument();

  const cards = await screen.findAllByTestId("card");
  expect(cards).toHaveLength(repositoriesData.items.length);

  scope.done();
});
