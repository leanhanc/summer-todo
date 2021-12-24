<script lang="ts">
	export let buttonHandler;
</script>

<button on:click={buttonHandler}> + </button>

<style lang="scss">
	button {
		--button-zise: 66px;

		align-items: center;
		background-color: var(--primary);
		border-radius: 50%;
		border: 6px solid var(--background);
		box-shadow: 2px 3px 10px 2px var(--dark-2);
		color: var(--dark-3);
		display: flex;
		font-size: 1.5rem;
		font-weight: 600;
		height: var(--button-zise);
		justify-content: center;
		left: calc(50% - var(--button-zise) / 2);
		position: absolute;
		top: calc(100% - var(--button-zise) / 2);
		transition: transform 0.4s ease-in-out;
		width: var(--button-zise);

		&:active {
			transform: scale(0.95);
		}
	}
</style>
