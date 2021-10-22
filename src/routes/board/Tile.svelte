<script lang="ts">
	import type { TileState } from '$lib/types/types';

	export let state: TileState = 'covered';
	$: isShown = state == 'shown';

</script>

<div on:click class="tile tile--{state}">
	<div class="number {isShown ? 'visible' : ''}">
		<slot />
	</div>
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

		transition: background-color 0.25s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.25s linear;
	}
	.number {
		opacity: 0;
	}
	.visible {
		opacity: 1;
	}
	.tile--shown {
		background-color: #bacdda;
	}
	.tile--hidden {
		opacity: 0;
	}
</style>
