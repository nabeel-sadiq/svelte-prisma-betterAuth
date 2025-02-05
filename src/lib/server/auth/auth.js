import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "$lib/server/db/prismaClient.js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite"
  }),
});
