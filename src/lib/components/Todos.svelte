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

	export function editTodo(e: MouseEvent & { currentTarget: EventTarget & HTMLSpanElement }) {
		editingTodo = items.find(item => item.id === e.currentTarget.dataset.id);
		isModalOpen = true;
	}

	export function removeTodo(e: MouseEvent & { currentTarget: EventTarget & HTMLSpanElement }) {
		const updatedItems = items.filter(
			item => item.id.toString() !== e.currentTarget.dataset.id
		);
		todoStore.set(updatedItems);
	}

	export function toggleToDoStatus(
		e: MouseEvent & { currentTarget: EventTarget & HTMLSpanElement }
	) {
		const indexOfTodo = $todoStore.findIndex(todo => todo.id === e.currentTarget.dataset.id);

		todoStore.set([
			...$todoStore.slice(0, indexOfTodo),
			($todoStore[indexOfTodo] = {
				...$todoStore[indexOfTodo],
				isDone: !$todoStore[indexOfTodo].isDone,
			}),
			...$todoStore.slice(indexOfTodo + 1),
		]);
	}
</script>

<div class="todos">
	{#if items?.length > 0}
		<div class="notepad" in:fade out:fade>
			{#each items as item (item.id)}
				<li class={item.isDone ? 'notepad-item checked' : 'notepad-item'} data-id={item.id}>
					<div class="notepad-row">
						<div class="item-details" class:done={item.isDone}>
							<li class={getIconForCategory(item.category)} alt="Category Icon" />
							<div class="text-content" data-id={item.id}>
								<h4 class="item-title">
									{item.title}
								</h4>
								<p class="item-description">
									{item.content}
								</p>
							</div>
						</div>
						<div class="item-options">
							<span on:click={toggleToDoStatus} data-id={item.id}>
								<li
									alt="Toggle done status"
									class="item-icon fas fa-check"
									disabled={item.isDone}
									height="24"
									src="/edit.svg"
									width="24"
								/>
							</span>
							<span on:click={editTodo} data-id={item.id}>
								<li
									alt="Edit To Do item"
									class="item-icon fas fa-edit edit"
									height="24"
									src="/edit.svg"
									width="24"
								/>
							</span>
							<span on:click={removeTodo} data-id={item.id}>
								<li
									alt="Remove To Do item"
									class="item-icon fas fa-trash trash"
									height="24"
									src="/trash.svg"
									width="24"
									on:click={removeTodo}
								/>
							</span>
						</div>
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
		width: 100%;

		.done * {
			color: var(--success) !important;
		}
	}

	.notepad-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 0;
		border-bottom: 2px solid var(--light-1);

		&.checked {
			color: var(--success);
		}

		.notepad-row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			@media screen and (max-width: 768px) {
				width: 100%;
				flex-wrap: wrap;
			}

			.item-details {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				max-width: 75%;

				@media screen and (max-width: 768px) {
					max-width: none;
				}

				.category-icon {
					@media screen and (max-width: 768px) {
						align-self: start;
						top: 8px;
						position: relative;
					}
				}
			}

			.item-options {
				.item-icon {
					cursor: pointer;
					margin-right: 1rem;

					&.trash {
						color: var(--error);
					}

					&.edit {
						color: var(--dark-3);
					}
				}
				@media screen and (max-width: 768px) {
					width: 100%;
					display: flex;
					margin-top: 2rem;
					justify-content: center;
					justify-self: flex-end;
					flex: 1;
					.item-icon {
						cursor: pointer;
						margin-right: 1rem;
					}
				}
			}

			.text-content {
				flex: 1;
				padding: 0 2rem;
				width: 75%;

				.item-title {
					color: var(--dark-3);
					font-size: 1.3rem;
				}

				.item-description {
					color: var(--dark-2);
					margin-top: 0.5rem;
					font-size: 14px;
					width: 100%;
				}

				@media screen and (max-width: 768px) {
					width: 100%;
					padding: 0 1rem;
				}
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
