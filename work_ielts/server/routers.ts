import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { invokeLLM, type Message } from "./_core/llm";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

const chatMessageSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string(),
});

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(() => null),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  ai: router({
    chat: publicProcedure
      .input(
        z.object({
          messages: z.array(chatMessageSchema).min(1),
          maxTokens: z.number().int().min(256).max(4096).optional(),
        })
      )
      .mutation(async ({ input }) => {
        const result = await invokeLLM({
          messages: input.messages as Message[],
          maxTokens: input.maxTokens ?? 1200,
        });

        const content = result.choices?.[0]?.message?.content ?? "";
        return {
          content: typeof content === "string" ? content : JSON.stringify(content),
          raw: result,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
