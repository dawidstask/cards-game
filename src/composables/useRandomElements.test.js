import {useRandomElements} from "./useRandomElements.js";
const { generate } = useRandomElements()

test('test getting random elements: lack of data', () => {
	const test1 = generate([])
	const test2 = generate([{id: 5}])

	expect(test1).toStrictEqual([])
	expect(test2).toStrictEqual([])
})

test('test getting random elements: arrays', () => {
	const people = [
		{id: 'Etd1mVfsrEeM51wZfIEj', mass: 98, surname: 'Mills', name: 'Braeden'},
		{id: 'GvNTrRTTthqIpIibnrbe', name: 'Glenda', mass: 80, surname: 'Howe'},
		{id: 'XBOVs7SUqkxun8th3KcV', name: 'Arden', mass: 83, surname: 'Williamson'},
		{id: 'm4LfeyfObxoWbJyxHYos', surname: 'Moore', mass: 71, name: 'Candice'},
		{id: 'p2PRXMdCnnJEO2ORvvYl', mass: 74, surname: 'Yost', name: 'Roma'},
		{id: 'rt7wQxFQNcGYNwcEfuNc', surname: 'Swaniawski', name: 'Nicholaus', mass: 91},
		{id: 's9LiwHovxy8VOVkv45n9', mass: 77, name: 'Emery', surname: 'Gutmann'},
		{id: 'tTTH9nnrp9ImJRIgQSXP', mass: 79, name: 'Todd', surname: 'Brown'},
		{id: 'xAfSC4QCUBGPCtRpsD3F', name: 'Aditya', mass: 63, surname: 'Ernser'},
		{id: 'xQjksL3t3JoKojRkD3oa', mass: 67, name: 'Stephen', surname: 'Roberts'},
		{id: 'xtrYZqR4S6vyRh1iAFHf', surname: 'Trantow', mass: 85, name: 'Lon'}
	]
	const starships = [
		{id: '5N2hIO0wUS9chf4gocSf', name: 'Red-winged starling', crew: 29880},
		{id: '7vysFPAgsZMEJb50pZzJ', crew: 39877, name: 'Peruvian pelican'},
		{id: 'BxrRkSrEUbTr5NEZNrR4', crew: 33241, name: "Monteiro's storm petrel"},
		{id: 'GGAdmA056qjWvZsMmkKq', crew: 34688, name: 'Calandra lark'},
		{id: 'MwMAQgkqX0otAOz8s1Ds', crew: 67443, name: 'Duchess lorikeet'},
		{id: 'Zs0zoVUYREJw2XMlPSFH', crew: 44572, name: 'Silver-throated bushtit'},
		{id: 'fHsewv2sGbl4AnOBKH5n', crew: 32241, name: 'Eastern meadowlark'},
		{id: 'jLCwIBsWEe6WaqztF3i1', name: 'Indochinese roller', crew: 44521},
		{id: 'kWbfiWZGPYcogvyinUvx', crew: 44571, name: 'Baglafecht weaver'},
		{id: 'sL8Jy3ldG30PgVW2Rotn', crew: 28654, name: 'Green crombec'}
	]

	for (let i = 0; i < 1000; i++) {
		let resultPeople = generate(people)
		let resultStarships = generate(starships)
		expect(resultPeople[0].id === resultPeople[1].id).toBeFalsy()
		expect(resultStarships[0].id === resultStarships[1].id).toBeFalsy()
	}
})
