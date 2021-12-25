<script lang="ts">
	import { fade } from 'svelte/transition';

	export let buttonHandler;
</script>

<button class="add-button" on:click={buttonHandler} in:fade out:fade> + </button>

<style lang="scss">
	.add-button {
		--button-zise: 66px;

		align-items: center;
		background-color: var(--primary);
		border-radius: 50%;
		border: 6px solid var(--background);
		box-shadow: 2px 3px 10px 2px var(--dark-2);
		color: var(--dark-3);
		display: flex;
		padding: 0;
		font-size: 1.5rem;
		font-weight: 600;
		height: var(--button-zise) !important;
		justify-content: center;
		left: calc(50% - var(--button-zise) / 2);
		position: absolute;
		top: calc(100% - var(--button-zise) / 2);
		transition: transform 0.4s ease-in-out;
		width: var(--button-zise) !important;

		&:active {
			transform: scale(0.97);
		}
	}
</style>
