<script context="module">
	import supabaseClient from '../lib/api/supabase';

	export async function load({ page, fetch, session, context }) {
		if (session) {
			supabaseClient.auth.setAuth(session.access_token);
		}

		return {
			props: {},
		};
	}
</script>

<script>
	// Components
	import Home from '@views/Home.svelte';
</script>

<Home />
