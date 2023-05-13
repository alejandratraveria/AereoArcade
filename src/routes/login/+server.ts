import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import prisma from "$lib/prisma";

export const GET: RequestHandler = async ({ cookies, request }) => {
    const data = await request.json();

    // esto hay que hacerlo con FormData

    if (!data.mail || !data.name || !data.password) throw error(400, "Missing required fields");

    let user;
    try {
        user = await prisma.user.findUniqueOrThrow({
            where: { email: data.mail }
        });
    } catch (e) {
        throw error(404, "User not found");
    }

    const token = Math.random().toString(36).substring(2);

    cookies.set("session", token);
    return new Response(null, { status: 200 });
}

export const POST: RequestHandler = async ({ request, cookies }) => {
    const data = await request.json();

    if (!data.email || !data.username || !data.password) {
        throw error(400, "Missing required fields");
    }

    const user = await prisma.user.findUnique({
        where: { email: data.mail }
    });

    if (user) throw error(409, "User already exists");

    const token = Math.random().toString(36).substring(2);

    await prisma.user.create({
        data: {
            email: data.mail,
            name: data.name,
            password: data.password,
            token: token,
        }
    });

    cookies.set("session", token);

    return new Response(null, { status: 200 });
}