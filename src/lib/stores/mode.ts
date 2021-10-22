import { writable } from "svelte/store"
import type {Mode} from '$lib/types/types';
import type { Writable } from "svelte/store";

const gameMode: Writable<Mode> = writable();

export {gameMode}