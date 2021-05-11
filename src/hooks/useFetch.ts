import { useEffect, useState } from "react";

export function useFetch<TData>(url: string, initialState: TData) {
  const [data, setData] = useState<TData>(initialState);

  useEffect(() => {
    async function fetchMovies() {
      const rsp = await fetch(url);
      const json = await rsp.json();
      setData(json);
    }

    fetchMovies();
  }, [url]);

  return [data, setData] as const;
}
