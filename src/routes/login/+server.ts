import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import prisma from "$lib/prisma";

export const POST: RequestHandler = async ({ request, cookies }) => {
    const data = await request.json();

    if (!data.email || !data.username || !data.password) {
        throw error(400, "Missing required fields");
    }

    const user = await prisma.user.findUnique({
        where: { email: data.email as string }
    });
    
    const token = Math.random().toString(36).substring(2);

    await prisma.user.create({
        data: {
            email: data.email,
            name: data.username,
            password: data.password,
            token: token,
        }
    });

    cookies.set("session", token);
    return new Response(null, { status: 200 });
}