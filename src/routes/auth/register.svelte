<script lang="ts">
	import { goto } from '$app/navigation';

	// Stores
	import authStore from '@stores/auth';

	// Components
	import AuthForm from '@components/AuthForm.svelte';

	// Types
	import type { User } from '@supabase/supabase-js';

	export let email = '';
	export let password = '';

	export let signUp = async e => {
		const response = await fetch('register.json', {
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

<h2 class="title">Welcome</h2>

<p>
	<span><i class="fas fa-info-circle" /></span> In order to sync your todos across multiple devices
	you need to register. Otherwise they will be available only in your current device. Beware that you
	can lose them if you erase all the data in your browser or perform a factory reset on your device.
</p>
<AuthForm bind:email bind:password bind:onSumbit={signUp} />

<style lang="scss">
	h2 {
		margin-bottom: 2rem;
		color: var(--primary);
	}

	p {
		margin-bottom: 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		font-size: 14px;
		color: var(--light-1);
		line-height: 1.7;

		@media screen and (max-width: 768px) {
			max-width: 90%;
		}
	}
</style>
