<script lang="ts">
	// Global CSS
	import '@styles/reset.css';
	import '@styles/global.css';
</script>

<div id="layout">
	<slot />
</div>

<style lang="scss">
	#layout {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100%;
		padding: 1rem;
		margin-bottom: 4rem;
		position: relative;
		margin: auto;

		@media screen and (max-width: 768px) {
			margin-bottom: 2rem;
		}
	}
</style>
