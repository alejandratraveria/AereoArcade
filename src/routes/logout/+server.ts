import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import prisma from "$lib/prisma";

export const GET: RequestHandler = async ({ request, cookies }) => {
    cookies.delete("session");

    return new Response(null, { status: 200 });
}