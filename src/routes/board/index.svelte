<script lang="ts">
	import { gameMode, gameResult, getBoardSize } from '$lib/stores/mode';
	import Board from './GameBoard.svelte';
	import Tile from './TileItem.svelte';
	import type { TileState } from '$lib/types/types';
	import type { TileItem } from '$lib/types/interfaces';
	import { generateBoardNumbers } from '$lib/utils';
	import Status from '$lib/Status.svelte';
	import GameOver from './GameOver.svelte';
import { onMount } from 'svelte';
	const boardSize = getBoardSize($gameMode);

	let correctGuess = [];
	let selected = [];
	let boardArray = [];

	let moves = 0;

	generateBoardNumbers(boardSize * boardSize).forEach((number) => {
		boardArray.push(number);
	});

	function handleClick(index) {
		selected = [...selected, index];

		if (selected.length >= 2) {
			const firstGuess = boardArray[selected[0]];
			const secondGuess = boardArray[selected[1]];
			moves += 1;
			if (firstGuess == secondGuess) {
				correctGuess = [...correctGuess, ...selected];
				selected = [];
				return;
			}

			setTimeout(() => {
				selected = [];
			}, 500);
		}
	}

	function handleGameover(event) {
		if (event.detail) {
			$gameResult = 'lost';
		}
	}

	function hadleRestart() {
		$gameResult = 'starting';
		moves = 0;
		selected = [];
		correctGuess = [];
	}

	onMount(() => {
		$gameResult = 'starting';
	})

	$: if (correctGuess.length == boardArray.length) {
		$gameResult = 'won';
	}
</script>

{#if $gameResult == 'won' || $gameResult == "lost"}
<GameOver on:newGame={hadleRestart} correct={correctGuess.length / 2} moves={moves}/>
{/if}

<h1>{$gameMode}</h1>
<Board>
	{#each boardArray as val, index}
		<Tile
			shown={selected.includes(index)}
			correct={correctGuess.includes(index)}
			on:click={() => handleClick(index)}>{val}</Tile
		>
	{/each}
</Board>

<div class="status">
	<Status type="time" on:over={handleGameover} />
	<Status type="moves" value={moves} />
</div>

<style>
	h1 {
		text-align: center;
		margin-bottom: 3rem;
	}
	.status {
		display: flex;
		max-width: 300px;
		justify-content: center;
		gap: 4rem;
		margin: 0 auto;
		margin-top: 4rem;
	}
</style>
