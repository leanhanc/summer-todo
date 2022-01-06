<script>
	import { goto } from '$app/navigation';

	// Components
	import AuthForm from '@components/AuthForm.svelte';

	export let email = '';
	export let password = '';

	export let signIn = async e => {
		const response = await fetch('login.json', {
			method: 'post',
			body: new FormData(e.target),
		});
		if (response.ok) {
			goto('/');
		} else {
			console.log('[login]: ', await response.text());
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
