import { writable } from 'svelte/store';

export const user = writable({
	isGuest: true,
	user: {},
});
