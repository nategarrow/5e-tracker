const stat_block = [
	{
		name: 'Strength',
		value: 10,
		additionalModifier: 0
	},
	{
		name: 'Dexterity',
		value: 10,
		additionalModifier: 0
	},
	{
		name: 'Constitution',
		value: 10,
		additionalModifier: 0
	},
	{
		name: 'Intelligence',
		value: 10,
		additionalModifier: 0
	},
	{
		name: 'Wisdom',
		value: 10,
		additionalModifier: 0
	},
	{
		name: 'Charisma',
		value: 10,
		additionalModifier: 0
	}
];

const defaultCharacter = {
	id: 'default-1',
	name: '',
	classLevel: [
		{
			name: 'Fighter',
			level: 1,
			subclass: ''
		},
		{
			name: 'Warlock',
			level: 1,
			subclass: ''
		},
	],
	stats: stat_block,
	backpack: [],
	spells: [],
	counters: []
};

export default defaultCharacter;
