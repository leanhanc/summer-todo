<script>
	// Global CSS
	import '@styles/reset.css';
	import '@styles/global.css';

	// Dev Tools

	// Components
	import Home from '@views/Home.svelte';
</script>

<main>
	<Home />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: center;
		justify-content: center;
	}
</style>
