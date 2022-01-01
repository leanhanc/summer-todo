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
	import { onMount } from 'svelte';

	// Stores
	import authStore from '@stores/auth';
	import User from '@components/User.svelte';

	export let session;

	onMount(async () => {
		if (session) {
			authStore.set({
				isGuest: false,
				user: {
					id: session.user.id,
					email: session.user.email,
				},
			});
		}
	});
</script>

<div id="layout">
	<User />
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
