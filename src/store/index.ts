import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from './../../firebase'
import {People} from "../types/People.ts";
import {Starships} from "../types/Starships.ts";

export const useStore = defineStore('store', () => {
	const state = ref({
		people: [] as People[],
		starships: [] as Starships[],
		randomPeople: [] as People[],
		randomStarships: [] as Starships[],
	})

	const getPeople = async () => {
		const peopleQuerySnapshot = await getDocs(collection(db, "people"));
		peopleQuerySnapshot.forEach((doc) => {
			state.value.people.push({ id: doc.id, ...doc.data() as Omit<People, 'id'> })
		});
	}

	const getStarships = async () => {
		const starshipsQuerySnapshot = await getDocs(collection(db, "starships"));
		starshipsQuerySnapshot.forEach((doc) => {
			state.value.starships.push({ id: doc.id, ...doc.data() as Omit<Starships, 'id'> })
		});
	}

	const generateTwoDifferentRandomElements = (type: 'people' | 'starships'): void => {
		const data: Array<People | Starships> = state.value[type]
		if (data.length < 2) {
			console.error('Amount of data should be greater than 2')
			return
		}

		let firstIndex: number = Math.floor(Math.random() * data.length)
		let secondIndex: number = Math.floor(Math.random() * (data.length - 1))
		if (secondIndex >= firstIndex) {
			secondIndex++
		}

		const name: string = `random${type.charAt(0).toUpperCase() + type.slice(1)}`
		state.value[name] = [data[firstIndex], data[secondIndex]]
	}

	return {
		getPeople,
		getStarships,
		generateTwoDifferentRandomElements,
		people: computed(() => state.value.people),
		randomPeople: computed(() => state.value.randomPeople),
		starships: computed(() => state.value.starships),
		randomStarships: computed(() => state.value.randomStarships),
	}
})
