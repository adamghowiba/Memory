export function generateRandomNumbers(max: number, size: number): number[] {
    const numbersSet: Set<number> = new Set();

    while (numbersSet.size < size) {
        const randNumber: number = Math.floor((Math.random() * max) + 1);
        numbersSet.add(randNumber);
    }

    return Array.from(numbersSet);
}

export function generateBoardNumbers(size: number): number[] {
	const randomNumbers = generateRandomNumbers(size * 3, (size / 2));
	const shuffledArray = [...randomNumbers, ...randomNumbers].sort(() => Math.random() - 0.5);
	
	return shuffledArray;
}

