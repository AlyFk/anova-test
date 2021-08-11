import nock from "nock";
import { renderHook, act } from "@testing-library/react-hooks";
import ReactQueryProvider from "providers/react-query-provider";
import * as gate from "gate";
import { useRepositoryData } from "./useRepositoryData";
import repositoriesData from "test-utils/mock-data";
import { RepositoryApiResult } from "types";

test("should return data", async () => {
  let name = "";
  const scope = nock("https://api.github.com/search")
    .defaultReplyHeaders({
      "access-control-allow-origin": "*",
    })
    .get("/repositories")
    .query({ q: "react in:name", sort: "stars", order: "desc", page: "1" })
    .reply(200, { ...repositoriesData });

  const { result, waitFor, rerender } = renderHook(
    () => useRepositoryData(name),
    {
      wrapper: ReactQueryProvider,
    }
  );

  name = "react";
  rerender();

  await waitFor(() => {
    return result.current.isSuccess;
  });

  expect(result.current.data).toEqual(repositoriesData);
  scope.done();
});

test("handle page correctly", async () => {
  const spy = jest.spyOn(gate, "searchRepositoryByName");
  spy.mockResolvedValue(repositoriesData as RepositoryApiResult);
  let name = "js";

  const { result, rerender } = renderHook(
    () => useRepositoryData(name),
    {
      wrapper: ReactQueryProvider,
    }
  );
  expect(spy).toBeCalledWith(name, 1);

  act(() => result.current.setPage(3));
  expect(result.current.page).toBe(3);
  expect(spy).toBeCalledWith(name, 3);

  name = "react";
  rerender();
  expect(result.current.page).toBe(1);
  expect(spy).toBeCalledWith(name, 1);
});
