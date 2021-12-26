<script>
	import { fade } from 'svelte/transition';

	export let isModalOpen;
	export let toggleModal;
</script>

{#if isModalOpen}
	<div class="modal-wrapper" in:fade>
		<button on:click={toggleModal} class="modal-close" aria-label="Close Modal Box">
			&times;
		</button>
		<slot />
	</div>
	<div on:click={toggleModal} in:fade class="background" />
{/if}

<style lang="scss">
	.modal-wrapper {
		background-color: #fff;
		border-radius: 1rem;
		inset: 25% 0 0 0%;
		margin: 0 auto;
		max-height: 450px;
		max-width: 700px;
		min-width: 320px;
		overflow: scroll;
		padding: 2rem;
		position: fixed;
		width: 100%;
		z-index: 1001;
	}

	.modal-close {
		font-size: 2rem;
		top: -1rem;
		right: calc(-100% + 1rem);
		position: relative;
		margin-left: auto;
		z-index: 1002;
		cursor: pointer;
		color: var(--dark-1);
		padding: 1rem;
		margin: -1rem;
	}

	.background {
		background: black;
		inset: 0;
		opacity: 0.8;
		position: fixed;
		z-index: 1000;
		width: 100vw;
		height: 100vh;
	}
</style>
