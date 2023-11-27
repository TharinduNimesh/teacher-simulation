import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useApiFetch<T>(
  path: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const headers: any = {};

  const token = useCookie("auth-token");

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const url = (process.env.SERVER_URL || 'http://localhost:8000') + path;

  return useFetch(url, {
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });
}
