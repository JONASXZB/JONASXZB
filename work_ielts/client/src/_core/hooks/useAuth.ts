import { useCallback, useMemo } from "react";

export type PublicUser = {
  id?: number;
  name?: string | null;
  email?: string | null;
  role?: "user" | "admin";
};

export function useAuth() {
  const logout = useCallback(async () => {
    return Promise.resolve();
  }, []);

  return useMemo(
    () => ({
      user: null as PublicUser | null,
      loading: false,
      error: null as Error | null,
      isAuthenticated: false,
      refresh: async () => null,
      logout,
    }),
    [logout]
  );
}
