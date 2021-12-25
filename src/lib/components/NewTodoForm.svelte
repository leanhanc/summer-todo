<script lang="ts">
	import { v4 as uuid } from 'uuid';

	// Stores
	import todoStore from '../stores/todos';

	// Types
	import { Category, ToDo } from '../../types/todo';

	// Props
	export let isModalOpen = false;

	// Handlers
	export function handleSubmit(e: Event & { currentTarget: EventTarget & HTMLFormElement }) {
		const data = Object.fromEntries(new FormData(e.currentTarget)) as Partial<ToDo>;
		console.log(data);
		if (!data.title || !data.content) return;

		const toDoToSave: ToDo = {
			id: uuid(),
			title: data.title,
			content: data.content,
			isDone: false,
			category: data.category,
		};

		isModalOpen = false;

		if ($todoStore) {
			todoStore.set([...$todoStore, toDoToSave]);
		} else {
			todoStore.set([toDoToSave]);
		}
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

	<label id="category" class="category">
		Category
		<select name="category">
			{#each Object.values(Category) as cat (cat)}
				<option value={cat}>{cat}</option>
			{/each}
		</select>
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
		select,
		textarea {
			margin-left: auto;
			width: 75%;
			padding: 1rem;
		}

		.content,
		.category {
			margin-top: 2rem;
		}

		button.submit {
			margin-top: 3rem;
			background-color: var(--primary);
		}
	}
</style>
