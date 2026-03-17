import { QueryClient } from "react-query";

export const  createTestQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
}
