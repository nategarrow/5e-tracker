import { writable } from 'svelte/store';
import defaultCharacter from '$lib/defaults/defaultCharacter';

export const characters = writable([{ ...defaultCharacter, name: 'Default Character' }]);
