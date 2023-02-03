import { entries } from './stores.js';
import { get } from 'svelte/store';

export function saveEntries() {
    // Save entries to local storage
    localStorage.setItem('entries', JSON.stringify(
        {'entries': get(entries)}
    ));
}

export function loadEntries() {
    // Load entries from local storage, if they exist
    entries.set(
        !!localStorage.getItem('entries')? JSON.parse(localStorage.getItem('entries')).entries : get(entries)
    );
}
