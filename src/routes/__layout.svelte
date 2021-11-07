<script>
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
	import { gameResult } from '$lib/stores/mode';
	import GameOver from './board/GameOver.svelte';
</script>

{#if $gameResult == 'won' || $gameResult == 'lost'}
<div class="overlay"></div>
{/if}
<nav>
	<h1 class="logo">memory</h1>

	{#if $page.path != '/start' && $page.path != '/'}
		<div class="buttons">
			<Button href="/mode" color="orange">New game</Button>
			<Button color="gray">Restart</Button>
		</div>
	{/if}
</nav>

<slot />

<style>
	nav {
		padding: 50px 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		font-size: 45px;
		line-height: 1;
		font-weight: 900;
	}
	.buttons {
		display: flex;
		gap: 1.5rem;
		flex-grow: 1;
		justify-content: end;
	}
	.overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: rgba(0, 0, 0, 0.247);
		backdrop-filter: blur(4px);
	}
</style>
