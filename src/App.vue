<script setup lang="ts">
import {useStore} from "./store";
import {onMounted, ref} from "vue";

const mode = ref<'people' | 'starships'>('people')
const store = useStore()
onMounted(async () => {
	await store.getPeople()
	await store.getStarships()
})
const setMode = (val: 'people' | 'starships') => mode.value = val
const onPlay = (val: 'people' | 'starships') => {
	setMode(val)
	store.generateTwoDifferentRandomElements(mode.value)
}
</script>

<template>
	<button @click="onPlay('people')">PLAY PEOPLE</button>
	<button @click="onPlay('starships')">PLAY STARSHIPS</button>
	<template v-if="mode === 'people'">
		<div v-if="store.randomPeople?.length">
			<p>{{store.randomPeople[0]}}</p>
			<p>{{store.randomPeople[1]}}</p>
		</div>
	</template>
	<template v-else>
		<div v-if="store.randomStarships?.length">
			<p>{{store.randomStarships[0]}}</p>
			<p>{{store.randomStarships[1]}}</p>
		</div>
	</template>
</template>

<style scoped>
</style>
