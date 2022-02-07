/// <reference types="@sveltejs/kit" />

declare module '*.svelte.md' {
	import type { SvelteComponentDev } from 'svelte/internal';

	export default class Comp extends SvelteComponentDev {
		$$prop_def: {};
	}
	export const metadata: Record<string, any>;
}
