import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  // Authentication is intentionally optional in this GitHub/Codex-ready version.
  // Add your own auth provider later, such as Auth.js, Clerk, Supabase Auth, or Google OAuth.
  return {
    req: opts.req,
    res: opts.res,
    user: null,
  };
}
