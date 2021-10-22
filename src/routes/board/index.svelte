<script lang="ts">
	import { gameMode } from '$lib/stores/mode';
	import Board from './GameBoard.svelte';
	import Tile from './Tile.svelte';
	import type { TileState } from '$lib/types/types';
	import type { TileItem } from '$lib/types/interfaces';
	import { generateRandomNumbers } from '$lib/utils';
	$gameMode = 'easy';

	let correctGuesses = [];

	let boardArray = Array.from({ length: 16 }, (value, index) => ({
		num: index + 1,
		state: 'covered'
	}));

	let selected = [];
	const SIZE = 2;

	function numberClicked(num, index) {
		selected = [...selected, num];
		boardArray[index].state = 'shown';

		if (selected.length >= SIZE) {
			let equal = selected[0] == selected[1];

			if (equal) {
				console.log('numbered are equal, horray');
			} else {
				console.log('keep guesing');
			}

			selected = [];
		}
	}

	$: console.log(selected);
</script>

<h1>{$gameMode}</h1>
<Board>
	<!-- {#each boardArray as { number, state }, index}
		<Tile bind:state on:click={() => handleClick(index)}>{number}</Tile>
	{/each} -->
	{#each boardArray as val, index}
		<Tile bind:state={val.state} on:click={() => numberClicked(val.num, index)}
			>{Math.floor(Math.random() * 20 + 1)}</Tile
		>
	{/each}
</Board>

<style>
	h1 {
		text-align: center;
		margin-bottom: 3rem;
	}
</style>
