<script lang="ts">
	import type { ButtonColor } from './types/types';
	export let href = null;

	export let color: ButtonColor = 'gray';
	export let circle: boolean = false;
	export let fullWidth = false;
</script>

{#if href}
	<a on:click {href} class="{color} button" class:circle class:fullWidth> <slot /></a>
{:else}
	<button on:click class="{color} button" class:circle class:fullWidth> <slot /></button>
{/if}

<style>
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 15px 30px;
		border-radius: 50px;
		font-weight: 700;
		text-transform: uppercase;

		transition: transform 0.25s ease-out, opacity 0.25s ease-out, background-color 0.25s linear;
	}
	.fullWidth {
		width: 100%;
	}
	.button:hover {
		transform: translateY(-4px);
	}
	.orange {
		background-color: #fda215;
		color: white;
	}
	.gray {
		color: #31485a;
		background-color: #dee5eb;
	}
	.circle {
		background-color: #fda215;
		width: 150px;
		height: 150px;
		font-size: 1.5rem;
		justify-content: center;
		border-radius: 50%;
		color: white;
	}
	.circle:hover {
		background-color: #31485a;
		/* opacity: 0.7; */
	}
</style>
