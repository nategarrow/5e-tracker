import { writable } from 'svelte/store';
import defaultCharacter from '$lib/defaults/defaultCharacter';

export const characters = writable([{ ...defaultCharacter, name: 'Zrakis' }]);

export const addCharacter = (character: typeof defaultCharacter) => {
	characters.update((chars) => [...chars, { ...character }]);
};

export const removeCharacter = (id: string) => {
	characters.update((chars) => chars.filter((char) => char.id !== id));
};

export const updateCharacter = (id: string, character: typeof defaultCharacter) => {
	characters.update((chars) =>
		chars.map((char) => (char.id === id ? { ...char, ...character } : char))
	);
};
