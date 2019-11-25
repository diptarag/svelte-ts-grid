import { writable } from 'svelte/store';

interface GridStateType {
    sort?: string;
    pagination?: {
        start: number;
        end: number;
    };
    filter?: {
        global?: any
    }
}

let initialState: GridStateType = {};

export const gridState = writable(initialState);
export { GridStateType };