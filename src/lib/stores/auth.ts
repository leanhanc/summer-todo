import { writable } from 'svelte/store';

const user = writable({
	isGuest: true,
	user: {},
});

export default user;
