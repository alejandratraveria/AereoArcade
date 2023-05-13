import prisma from '$lib/prisma';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import type { User } from '@prisma/client';

export const session: Handle = async ({ event, resolve }) => {
	let sessionToken: string | undefined = event.cookies.get('session');

    if (sessionToken) {
        const session = await prisma.user.findUnique({
			where: {
				token: sessionToken
			}
		});
		event.locals.session = session as User;
    } else {
		event.locals.session = undefined;
    }

	return await resolve(event);
};

export const handle = sequence(session);