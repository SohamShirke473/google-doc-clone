import { paginationOptsValidator } from "convex/server";
import { query, mutation } from "../convex/_generated/server";
import { ConvexError, v } from "convex/values";

export const create = mutation({
    args: { title: v.optional(v.string()), initialContent: v.optional(v.string()) },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity();

        if (!user) {
            throw new ConvexError("Unathorized");
        }

        const organizationId = (user.organization_id ?? undefined) as string | undefined;

        return ctx.db.insert("documents", {
            title: args.title ?? "Untitled document",
            ownerId: user.subject,
            organizationId,
            initialContent: args.initialContent,
        });
    },
});


export const get = query({
    args: { paginationOpts: paginationOptsValidator, },
    handler: async (ctx, args) => {
        return await ctx.db.query("documents").paginate(args.paginationOpts)
    }
})
