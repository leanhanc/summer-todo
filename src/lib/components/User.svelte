<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '../api/supabase';
	import user from '@stores/auth';

	// Stores
	import authStore from '@stores/auth';

	export let isGuest = false;
	export let userData = null;

	authStore.subscribe(store => {
		isGuest = store.isGuest;
		userData = store.user;
	});
</script>

<div class="user">
	{#if isGuest}
		<a class="cta" href="/auth/register"><i class="fas fa-sign-in-alt icon" />Register</a>
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

		.cta {
			font-size: 14px;
		}

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
