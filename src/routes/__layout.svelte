<script>
	import { page } from '$app/stores';
	import Button from '$lib/Button.svelte';
</script>

<nav>
	<h1 class="logo">memory</h1>

	{#if $page.path != '/start' && $page.path != '/'}
		<div class="buttons">
			<Button href="/start" color="orange">New game</Button>
			<Button href="/start" color="gray">Restart</Button>
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
        gap: 1.5rem
    }
</style>
