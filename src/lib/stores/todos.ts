import { browser } from '$app/env';
import { writable } from 'svelte/store';

// Types
import type { ToDo } from '../../types/todo';

const storeName = '[todos]';
const initialValue = browser ? JSON.parse(window.localStorage.getItem(storeName)) : [];

const todoStore = writable<ToDo[]>(initialValue);

todoStore.subscribe((value: ToDo[]) => {
	if (browser) {
		window.localStorage.setItem(storeName, JSON.stringify(value));
	}
});

export default todoStore;
