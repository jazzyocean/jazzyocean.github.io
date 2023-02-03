import { writable } from 'svelte/store';
// initialize globals
export let entries = writable([]);
export let theme = writable(true);
export let presentation = writable(false);
