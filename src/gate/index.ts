import { RepositoryApiResult } from "types";
import api from "./config";

export const searchRepositoryByName = async (name: string, page: number) =>
  await (
    await api.get<RepositoryApiResult>(
      `search/repositories?q=${name} in:name&sort=stars&order=desc&page=${page}`
    )
  ).data;
