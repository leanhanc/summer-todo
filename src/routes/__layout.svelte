<script context="module">
	import { browser } from '$app/env';

	export async function load({ session }) {
		return {
			props: {
				session,
			},
		};
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '@stores/auth';

	import { onMount } from 'svelte';

	export let session;

	onMount(async () => {
		if (session) {
			user.set({
				isGuest: false,
				user: {
					id: session.user.id,
					email: session.user.email,
				},
			});
		}
	});

	async function signUp(e) {
		const response = await fetch('/signup', {
			method: 'POST',
			body: new FormData(e.target),
		});
		if (response.ok) {
			goto('/');
		} else {
			console.log(await response.text());
		}
	}

	async function signIn(e) {
		const response = await fetch('/auth/login.json', {
			method: 'POST',
			body: new FormData(e.target),
		});
		if (response.ok) {
			goto('/');
		} else {
			console.log(await response.text());
		}
	}
</script>

<main>
	<slot />
	<h1>Welcome to my app!</h1>
	<h2>Sign up!</h2>
	<form on:submit|preventDefault={signUp}>
		<label for="email">Email</label>
		<input class="block p-2 rounded" id="email" name="email" type="email" /><br />
		<label for="password">Password</label>
		<input class="block p-2 rounded" id="password" name="password" type="password" /><br />
		<button class="p-2 rounded block mx-auto">Sign Up</button>
	</form>
	<h2>..or Log in!</h2>
	<form on:submit|preventDefault={signIn}>
		<label for="email">Email</label>
		<input class="block p-2 rounded" id="email" name="email" type="email" /><br />
		<label for="password">Password</label>
		<input class="block p-2 rounded" id="password" name="password" type="password" /><br />
		<button class="p-2 rounded block mx-auto">Login</button>
	</form>

	{JSON.stringify($user)}
</main>
