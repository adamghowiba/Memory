export function generateRandomNumbers(max: number, size: number):Set<number> {
    const numbersSet: Set<number> = new Set();

    while (numbersSet.size < size) {
        const randNumber: number = Math.floor((Math.random() * max) + 1);

        numbersSet.add(randNumber);
    }

    return numbersSet;
}


	// let firstTile: TileItem;
	// let seondTile: TileItem;

	// /* Build board */
	// let boardArray: TileItem[] = [];

	// let i = 0;
	// generateRandomNumbers(20, 16).forEach((val) => {
	// 	i++;
	// 	boardArray.push({ number: val, state: 'covered', index: i });
	// });

	// function unshowTiles() {
	// 	boardArray[firstTile.index].state = 'covered';
	// 	boardArray[seondTile.index].state = 'covered';

	// 	firstTile = null;
	// 	seondTile = null;
	// }

	// function handleClick(number) {
	// 	boardArray[number].state = 'shown';

	// 	if (!firstTile) {
	// 		firstTile = boardArray[number];
	// 	} else {
	// 		seondTile = boardArray[number];
	// 		setTimeout(() => {
	// 			unshowTiles();
	// 		}, 1000);
	// 	}
	// }
