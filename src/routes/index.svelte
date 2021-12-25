<script>
	// Global CSS
	import '@styles/reset.css';
	import '@styles/global.css';

	// Dev Tools
	import Toy from '@leveluptuts/svelte-toy/Toy.svelte';

	// Stores
	import AuthStore from '../lib/stores/auth';
	import TodoStore from '../lib/stores/todos';

	// Components
	import Home from '@views/Home.svelte';
</script>

<Home />

<Toy register={[{ auth: AuthStore }, { todos: TodoStore }]} />
