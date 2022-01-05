<script>
	import { goto } from '$app/navigation';

	// Api
	import supabaseClient from '@api/supabase';

	// Components
	import AuthForm from '@components/AuthForm.svelte';

	export let email = '';
	export let password = '';

	let signIn = async e => {
		const { user, error } = await supabaseClient.auth.signIn({
			email,
			password,
		});

		if (user.id) {
			goto('/');
		} else {
			console.log('[login]: ' + error);
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
