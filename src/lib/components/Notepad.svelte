<script lang="ts">
	import { fade } from 'svelte/transition';

	export let items = [
		{
			id: 1,
			title: 'Vender Macbook',
			content: 'En Mercado Libre por, al menos, $100.000',
			isDone: false,
		},
		{
			id: 2,
			title: 'Vender PS4',
			content: 'En Mercado Libre por, al menos, $50.000',
			isDone: false,
		},
		{
			id: 3,
			title: 'Comprar CEDEARs',
			content: 'Comprar CEDEAR de Apple para ahorrar en dólares',
			isDone: true,
		},
		{
			id: 4,
			title: 'Star Trek',
			content: 'Terminar La Serie Original y comenzar Prodigy',
			isDone: false,
		},
		{
			id: 5,
			title: '20 años del 2001',
			content: 'Ver la serie de Netflix y el documental de Berco/César González',
			isDone: false,
		},
	];

	export function removeTodo(e: MouseEvent & { currentTarget: EventTarget & HTMLImageElement }) {
		items = items.filter(item => item.id.toString() !== e.currentTarget.dataset.id);
	}
</script>

{#if items.length > 0}
	<div class="notepad">
		{#each items as item (item.id)}
			<li class={item.isDone ? 'notepad-item checked' : 'notepad-item'} out:fade>
				<div>
					<h4 class="item-title">
						{item.title}
					</h4>
					<p class="item-description">
						{item.content}
					</p>
				</div>
				<img
					data-id={item.id}
					class="item-remove"
					src="/trash.svg"
					width="24"
					height="24"
					alt="Remove To Do item"
					on:click={removeTodo}
				/>
			</li>
		{/each}
		<ul />
	</div>
{/if}

<style lang="scss">
	.notepad {
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
		margin-top: 4rem;
		min-height: 300px;
		max-height: 66vh;
		overflow: scroll;
		padding: 3rem 2rem;
		width: 100%;
	}
	.notepad-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 0;
		border-bottom: 2px solid var(--light-1);

		&.checked {
			text-decoration: line-through;
		}

		.item-title {
			color: var(--dark-3);
			font-size: 1.3rem;
		}
		.item-description {
			color: var(--dark-2);
			margin-top: 1rem;
			font-size: 1.1rem;
		}
		.item-remove {
			cursor: pointer;
		}
	}
	.notepad-item:first-of-type {
		padding-top: 0;
		border-top: none;
	}
	.notepad-item:last-of-type {
		padding-bottom: 0;
		border-bottom: none;
	}
</style>
