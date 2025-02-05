import { prisma } from "$lib/server/db/prismaClient.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const tasks = await prisma.tasks.findMany();
  return {
    tasks: tasks
  };
}
