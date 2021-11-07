import type {Mode} from '../types/types';

export type TileItem = {
    number: number;
    index: number;
}

export interface BoardLayout {
    mode: Mode
    size: '16' | '36'
}


