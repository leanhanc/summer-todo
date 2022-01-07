<script lang="ts">
	import { goto } from '$app/navigation';

	// Components
	import AuthForm from '@components/AuthForm.svelte';

	// Stores
	import authStore from '@stores/auth';

	// Types
	import type { User } from '@supabase/supabase-js';

	export let email = '';
	export let password = '';

	export let signIn = async e => {
		const response = await fetch('login.json', {
			method: 'post',
			body: new FormData(e.target),
		});

		if (response.ok) {
			const parsedResponse: User = await response.json();

			authStore.set({
				isGuest: false,
				user: {
					id: parsedResponse.id,
					email: parsedResponse.email,
				},
			});

			goto('/');
		} else {
			console.log('[register]: ', await response.text());
		}
	};
</script>

<h2 class="title">Welcome back!</h2>
<AuthForm bind:email bind:password bind:onSumbit={signIn} />

<style lang="scss">
	.title {
		margin-bottom: 2rem;
	}
</style>
