const getModifier = (value: number) => {
	const mod = Math.floor((value - 10) / 2);
	
	return mod >= 0 ? `+${mod}` : `${mod}`;
};

export default getModifier;
