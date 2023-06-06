/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { router, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const items: { id: string; title: string; text: string }[] = [];

export const postRouter = router({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      }),
    )
    .query(async ({ input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;

      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        // Remove the last item and use it as next cursor

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const nextItem = items.pop()!;
        nextCursor = nextItem.id;
      }

      return {
        items: items.reverse(),
        nextCursor,
      };
    }),
  byId: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { id } = input;
      const post = items.find((item) => item.id === id);
      if (!post) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No post with id '${id}'`,
        });
      }
      return post;
    }),
  add: publicProcedure
    .input(
      z.object({
        id: z.string().uuid().optional(),
        title: z.string().min(1).max(32),
        text: z.string().min(1),
      }),
    )
    .mutation(async ({ input }) => {
      if (input.id === undefined) {
        items.push({
          id: Math.random().toString(36).substr(2, 9),
          title: input.title,
          text: input.text,
        });
      } else {
        const editTarget = items.find((item) => item.id === input.id);
        if (editTarget === undefined) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: `No post with id '${input.id}'`,
          });
        }
        editTarget.title = input.title;
        editTarget.text = input.text;
      }
      return input;
    }),
});
