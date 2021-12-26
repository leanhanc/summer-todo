<script context="module">
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
	import { onMount } from 'svelte';

	// Stores
	import user from '@stores/auth';

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

<div id="layout">
	<slot />
</div>

<style lang="scss">
	#layout {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		min-height: 100vh;
		padding: 1rem;
		margin-bottom: 4rem;
		position: relative;

		@media screen and (max-width: 768px) {
			margin-bottom: 2rem;
		}
	}
</style>
