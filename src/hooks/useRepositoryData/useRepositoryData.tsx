import { searchRepositoryByName } from "gate";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const useRepositoryData = (name: string) => {
  const [page, setPage] = useState(1);
  const result = useQuery(
    ["repositories", page, name],
    () => searchRepositoryByName(name, page),
    {
      enabled: !!name,
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (name) {
      setPage(1);
    }
  }, [name]);

  console.log(page);
  const handlePage = useCallback((p: number) => setPage(p), []);
  return { ...result, page, setPage: handlePage };
};
