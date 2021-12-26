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

		@media screen and (max-width: 768px) {
			inset: 2rem 0 0 0;
			padding: 1rem;
			max-width: calc(100vw - 20px);
			margin: 0 auto;
			max-height: 600px;
		}
	}

	.modal-close {
		font-size: 2rem;
		top: -1rem;
		right: calc(-100% + 1rem);
		position: relative;
		z-index: 1002;
		cursor: pointer;
		color: var(--dark-1);
		padding: 1rem;
		margin: -1rem;
	}

	.background {
		background: black;
		height: 100vh;
		inset: 0;
		opacity: 0.8;
		pointer-events: none;
		position: fixed;
		width: 100vw;
		z-index: 1000;
	}
</style>
