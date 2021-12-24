<script lang="ts">
	import { fade } from 'svelte/transition';

	// Stores
	import todoStore from '../stores/todos';

	// Components
	import Modal from './Modal.svelte';
	import NewTodoForm from './NewTodoForm.svelte';

	// State
	export let items = [];
	export let isModalOpen = false;

	// Subscriptions
	todoStore.subscribe(newValue => {
		items = newValue;
	});

	// Handlers
	export function toggleModal() {
		isModalOpen = !isModalOpen;
	}

	export function removeTodo(e: MouseEvent & { currentTarget: EventTarget & HTMLImageElement }) {
		const updatedItems = items.filter(
			item => item.id.toString() !== e.currentTarget.dataset.id
		);
		todoStore.set(updatedItems);
	}
</script>

{#if items.length > 0}
	<div class="notepad">
		{#each items as item (item.id)}
			<li class={item.isDone ? 'notepad-item checked' : 'notepad-item'} in:fade out:fade>
				<div>
					<h4 class="item-title">
						{item.title}
					</h4>
					<p class="item-description">
						{item.content}
					</p>
				</div>
				<img
					alt="Remove To Do item"
					class="item-remove"
					data-id={item.id}
					height="24"
					src="/trash.svg"
					width="24"
					on:click={removeTodo}
				/>
			</li>
		{/each}
		<ul />
	</div>
	<Modal {isModalOpen}>
		<NewTodoForm bind:isModalOpen />
	</Modal>
	<button on:click={toggleModal}>NEW TODO</button>
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
			margin-top: 0.5rem;
			font-size: 14px;
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
