import { render, RenderResult } from "@testing-library/react";
import { ReactElement } from "react";
import { createTestQueryClient } from "./createTestQueryClient";
import { QueryClientProvider } from "react-query";
import { AuthProvider } from "login/context";

export const renderWithProviders = (ui: ReactElement): RenderResult => {
  const queryClient = createTestQueryClient();
  
  return render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {ui}
      </AuthProvider>
    </QueryClientProvider>
  );
}
