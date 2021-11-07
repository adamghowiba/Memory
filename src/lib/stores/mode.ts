import { writable } from "svelte/store"
import type {Mode} from '$lib/types/types';
import type { Writable } from "svelte/store";

type GameResult = 'won' | 'lost' | 'starting';
export const getBoardSize = (mode: Mode): number => {
    if (mode == 'easy') return 4;
    if (mode == 'hard') return 6;
}

const gameMode: Writable<Mode> = writable("easy");

const gameResult: Writable<GameResult> = writable();


export {gameMode, gameResult}