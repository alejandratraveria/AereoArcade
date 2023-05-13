import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params, locals}) => {
    return {
        points: locals.session?.points,
    };
}