<script lang="ts">
	import { onMount } from 'svelte';

	// Stores
	import todosStore from '@stores/todos';

	// Component
	import Header from '@components/Header.svelte';
	import Todos from '@components/Todos.svelte';

	// Api
	import supabaseClient from '../api/supabase';

	onMount(async () => {
		supabaseClient
			.from('todos')
			.select('*')
			.then(todos => {
				if (todos.error) {
					console.log('[home]: ', todos.error);
					return;
				}
				if (todos.data?.length > 0) {
					$todosStore = todos.data;
				}
			});
	});
</script>

<main>
	<Header />
	<Todos />
</main>

<style lang="scss">
	main {
		position: relative;
	}
</style>
