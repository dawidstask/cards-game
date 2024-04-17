import {People} from "../types/People.ts";
import {Starships} from "../types/Starships.ts";

export function useRandomElements() {
	const generate = (data: Array<People | Starships>) => {
		if (data.length < 2) {
			console.error('Amount of data should be greater than 2')
			return []
		}

		let firstIndex: number = Math.floor(Math.random() * data.length)
		let secondIndex: number = Math.floor(Math.random() * (data.length - 1))
		if (secondIndex >= firstIndex) {
			secondIndex++
		}

		return [data[firstIndex], data[secondIndex]]
	}

	return {
		generate,
	}
}
