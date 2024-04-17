export function useRandomType() {
	const getType = (mode: 'people' | 'starships'): 'randomPeople' | 'randomStarships' => {
		return `random${mode.charAt(0).toUpperCase() + mode.slice(1)}`
	}

	return {
		getType,
	}
}
