<!-- TODO: Use svelete store for rendring grid? -->

<script>
    import { getBoardSize, gameMode } from "$lib/stores/mode";
	export let gridSize = getBoardSize($gameMode);

    const gridRows = `grid-template-rows: repeat(${gridSize}, min-content);`
    const gridColumns = `grid-template-columns: repeat(${gridSize}, min-content);`

</script>

<div class="board" style="{gridRows} {gridColumns}">
	<slot />
</div>

<style>
	.board {
        display: grid;
        /* grid-template-columns: repeat(4, min-content);
        grid-template-rows: repeat(4, min-content); */
        justify-content: center;
        column-gap: 15px;
        row-gap: 15px;
        width: auto;
		margin: 0 auto;
	}
</style>
