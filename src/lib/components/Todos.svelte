<script lang="ts">
	import { fade } from 'svelte/transition';

	// Stores
	import todoStore from '../stores/todos';

	// Components
	import Modal from './Modal.svelte';
	import TodoForm from './TodoForm.svelte';
	import AddButton from './AddButton.svelte';
	import { getIconForCategory } from '../../lib/utils/icons';

	// Types
	import type { ToDo } from '../../types/todo';

	// State
	export let items: ToDo[] = [];
	export let editingTodo: ToDo | null = null;
	export let isModalOpen = false;

	// Subscriptions
	todoStore.subscribe(newValue => {
		items = newValue;
	});

	// Handlers
	export function toggleModal() {
		isModalOpen = !isModalOpen;
		if (isModalOpen) {
			editingTodo = null;
		}
	}

	export function editTodo(e: MouseEvent & { currentTarget: EventTarget & HTMLImageElement }) {
		editingTodo = items.find(item => item.id === e.currentTarget.dataset.id);
		isModalOpen = true;
	}

	export function removeTodo(e: MouseEvent & { currentTarget: EventTarget & HTMLImageElement }) {
		const updatedItems = items.filter(
			item => item.id.toString() !== e.currentTarget.dataset.id
		);
		todoStore.set(updatedItems);
	}
</script>

<div class="todos">
	{#if items?.length > 0}
		<div class="notepad" in:fade out:fade>
			{#each items as item (item.id)}
				<li class={item.isDone ? 'notepad-item checked' : 'notepad-item'} data-id={item.id}>
					<div class="notepad-row">
						<img src={getIconForCategory(item.category)} alt="Category Icon" />
						<div class="text-content">
							<h4 class="item-title">
								{item.title}
							</h4>
							<p class="item-description">
								{item.content}
							</p>
						</div>
						<img
							alt="Remove To Do item"
							class="item-icon"
							data-id={item.id}
							height="24"
							src="/edit.svg"
							width="24"
							on:click={editTodo}
						/>
						<img
							alt="Remove To Do item"
							class="item-icon"
							data-id={item.id}
							height="24"
							src="/trash.svg"
							width="24"
							on:click={removeTodo}
						/>
					</div>
				</li>
			{/each}
			<ul />
		</div>
		<AddButton buttonHandler={toggleModal} />
	{:else}
		<button on:click={toggleModal} class="cta-button">Start</button>
	{/if}

	<Modal {isModalOpen} {toggleModal}>
		<TodoForm bind:isModalOpen bind:editingTodo />
	</Modal>
</div>

<style lang="scss">
	.todos {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 6rem;
		min-height: 300px;
	}

	.notepad {
		background-color: #fff;
		border-radius: 5px;
		min-height: 300px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
		max-height: 66vh;
		overflow: scroll;
		position: relative;
		padding: 3rem 2rem;
		width: 75%;
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

		.notepad-row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			.text-content {
				flex: 1;
				padding: 0 2rem;
				width: 100%;
			}

			.item-title {
				color: var(--dark-3);
				font-size: 1.3rem;
			}
			.item-description {
				color: var(--dark-2);
				margin-top: 0.5rem;
				font-size: 14px;
				max-width: 75%;
			}
			.item-icon {
				cursor: pointer;
				margin-right: 1rem;
			}
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

	.cta-button {
		background-color: var(--primary);
		margin-top: 2rem;
	}
</style>
