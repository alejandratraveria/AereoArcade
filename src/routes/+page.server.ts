import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, locals}) => {
    return {session: locals.session};
    throw error(404, 'Not found');
}