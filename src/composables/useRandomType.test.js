import {useRandomType} from "./useRandomType.js";

test('test getting random type', () => {
	const { getType } = useRandomType()
	const test1 = getType('people')
	const test2 = getType('starships')

	expect(test1).toBe('randomPeople')
	expect(test2).toBe('randomStarships')
})
