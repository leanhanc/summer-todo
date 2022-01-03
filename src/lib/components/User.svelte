<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '../api/supabase';
	import user from '@stores/auth';

	// Stores
	import authStore from '@stores/auth';

	export let isGuest = false;
	export let userData = null;

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

	authStore.subscribe(store => {
		isGuest = store.isGuest;
		userData = store.user;
	});
</script>

<div class="user">
	{#if isGuest}
		<a href="/login"><i class="fas fa-sign-in-alt icon" />Sign In</a>
	{:else}
		<span> Hola! </span>
	{/if}
</div>

<style lang="scss">
	.user {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 100%;

		a {
			color: var(--light-1);
			font-weight: 600;
			letter-spacing: 1.1px;
			font-size: 1.2rem;

			&:hover {
				color: var(--light-2);

				.icon {
					color: var(--light-2);
				}
			}

			.icon {
				color: var(--light-1);
				margin-right: 10px;
			}
		}
	}
</style>
