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

	return {
		getPeople,
		getStarships,
		people: computed(() => state.value.people),
		starships: computed(() => state.value.starships),
	}
})
