// See https://kit.svelte.dev/docs/types#app

import type { User } from "@prisma/client";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            session: User | undefined
        }
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
