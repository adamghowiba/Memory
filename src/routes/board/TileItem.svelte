<script lang="ts">
	import type { TileState } from '$lib/types/types';
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';

	export let shown = false;
	export let correct = false;
	let tileElement: HTMLElement;

	let timeout
</script>

<div
	on:click
	bind:this={tileElement}
	class="tile"
	class:tile--shown={shown}
	class:tile--correct={correct}
>
	{#if shown || correct}
	<slot />
	{/if}
</div>

<style>
	.tile {
		width: 80px;
		height: 80px;
		background-color: #31485a;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 2rem;
		font-weight: 700;

		cursor: pointer;

		/* transition: background-color 0.25s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.25s linear; */
	}
	@keyframes correct {
		10%, 50% {
			background-color: orange;
		}
		50%, 100% {
			background-color: #bacdda;
		}
	}
	.tile--shown {
		background-color: #bacdda;
	}
	.tile--correct {
		animation: correct 2s linear;
		background-color: #bacdda;
	}
	/* .tile--hidden {
		opacity: 0;
	} */
</style>
