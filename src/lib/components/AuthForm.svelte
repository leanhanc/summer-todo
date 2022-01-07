<script>
	export let email = '';
	export let password = '';
	export let onSumbit;
</script>

<form class="card" on:submit|preventDefault={onSumbit}>
	<label id="title" class="label">
		Email
		<input
			type="email"
			name="email"
			placeholder="example@gmail.com"
			bind:value={email}
			class="input"
			required
		/>
	</label>
	<label id="title" class="label">
		Password
		<input
			type="password"
			name="password"
			placeholder="*******"
			bind:value={password}
			class="input"
			required
		/>
	</label>

	<button type="submit" class="submit">Continue</button>
</form>

<style lang="scss">
	.card {
		background-color: #fff;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		max-width: 600px;
		min-height: 300px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
		padding: 3rem 2rem;
		width: 75%;

		@media screen and (max-width: 768px) {
			width: 100%;
			padding: 1rem;
			font-size: 14px;
		}
	}

	.label {
		text-align: center;
		margin-top: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
	}

	.input {
		margin-left: auto;
		width: 75%;
		padding: 1rem;

		@media screen and (max-width: 768px) {
			width: auto;
		}
	}

	button.submit {
		margin-top: 3rem;
		background-color: var(--primary);
	}
</style>
