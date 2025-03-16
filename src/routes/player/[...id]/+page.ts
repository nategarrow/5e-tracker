import { get } from 'svelte/store';
import { characters } from '$lib/stores/characters';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const allCharacters = get(characters);
	const character = allCharacters.find((char) => char.id === params.id);

	if (!character) {
		throw error(404, {
			message: `Character with ID ${params.id} not found`
		});
	}

	return {
		character
	};
};
