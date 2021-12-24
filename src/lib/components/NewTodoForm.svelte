<script lang="ts">
	import { v4 as uuid } from 'uuid';

	// Stores
	import todoStore from '../stores/todos';

	// Props
	export let isModalOpen = false;

	// Handlers
	export function handleSubmit(e: Event & { currentTarget: EventTarget & HTMLFormElement }) {
		const data = Object.fromEntries(new FormData(e.currentTarget)) as Partial<ToDo>;
		const toDoToSave: ToDo = {
			id: uuid(),
			title: data.title,
			content: data.content,
			isDone: false,
		};

		isModalOpen = false;

		todoStore.set([...$todoStore, toDoToSave]);
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="new-todo">
	<h2 class="form-header">New task</h2>
	<label id="title" class="title">
		Title
		<input type="text" name="title" placeholder="I will..." />
	</label>

	<label id="content" class="content">
		Content
		<textarea name="content" placeholder="And this is why and how I'll do it" />
	</label>

	<button type="submit" class="submit">Add</button>
</form>

<style lang="scss">
	.new-todo {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;

		.form-header {
			margin-bottom: 3rem;
			font-weight: 400;
			letter-spacing: 1.1px;
		}

		label {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			color: var(--dark-1);
		}

		input[type='text'],
		textarea {
			margin-left: auto;
			width: 75%;
			padding: 1rem;
		}

		.content {
			margin-top: 2rem;
			width: 100%;
		}

		button.submit {
			margin-top: 3rem;
			background-color: var(--primary);
			padding: 1rem 2rem;
			border-radius: 4px;
			letter-spacing: 1.4px;
			font-weight: 600;
			min-width: 200px;
			transition: transform 150ms ease-in-out;

			&:active {
				transform: scale(0.97);
			}
		}
	}
</style>
