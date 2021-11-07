<script>
	import Button from '$lib/Button.svelte';
	import Status from '$lib/Status.svelte';
	import { createEventDispatcher, dispatch_dev } from 'svelte/internal';

	const dispatch = createEventDispatcher();
	export let correct = 0;
	export let moves = 0;
</script>

<div class="wrapper">
	<h1>You did it!</h1>
	<h4>Game over! Here's how you did...</h4>

	<div class="status">
		<Status type="moves" value={moves} />
		<Status type="correct" value={correct} />
	</div>

	<div class="buttons">
		<Button on:click={() => dispatch('newGame', true)} fullWidth href="/mode">New Game</Button>
		<Button fullWidth color="orange">Restart</Button>
	</div>
</div>

<style>
	.wrapper {
		position: absolute;
		border-radius: 10px;
		top: 50%;
		left: 50%;
		width: 400px;
		padding: 4rem 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		transform: translate(-50%, -50%);
		background-color: white;
	}
	h4 {
		margin-bottom: 2rem;
	}
	.status {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-bottom: 2rem;
	}
	.buttons {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 2rem;
	}
</style>
