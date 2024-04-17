import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from './../../firebase';
import {People} from "../types/People.ts";
import {Starships} from "../types/Starships.ts";
import {useRandomType} from "../composables/useRandomType.ts";
import {useRandomElements} from "../composables/useRandomElements.ts";

export const useStore = defineStore('store', () => {
	const randomType = useRandomType()
	const randomElements = useRandomElements()
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
		console.log(state.value)
	}

	const getElements = (type: 'people' | 'starships'): void => {
		const data: Array<People | Starships> = state.value[type]
		const name: 'randomPeople' | 'randomStarships' = randomType.getType(type)
		state.value[name] = randomElements.generate(data)
	}

	return {
		getPeople,
		getStarships,
		getElements,
		people: computed(() => state.value.people),
		randomPeople: computed(() => state.value.randomPeople),
		starships: computed(() => state.value.starships),
		randomStarships: computed(() => state.value.randomStarships),
	}
})
