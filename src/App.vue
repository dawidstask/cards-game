<script setup lang="ts">
import {useStore} from "./store";
import {onMounted, ref} from "vue";
import AppCard from "./components/AppCard.vue";
import {useRandomType} from "./composables/useRandomType.ts";
import AppBarChart from "./components/AppBarChart.vue";

const mode = ref<'people' | 'starships'>('people')
const showChart = ref<boolean>(false)
const scoreCounter = ref({
	left: 0,
	right: 0,
})
const randomType = useRandomType()
const store = useStore()
onMounted(async () => {
	await store.getPeople()
	await store.getStarships()
})
const setMode = (val: 'people' | 'starships') => mode.value = val
const onPlay = (val: 'people' | 'starships') => {
	setMode(val)
	store.getElements(mode.value)
	const name: 'randomPeople' | 'randomStarships' = randomType.getType(mode.value)
	const compare: 'mass' | 'crew' = mode.value === 'people' ? 'mass' : 'crew'
	store[name][0][compare] > store[name][1][compare] ? scoreCounter.value.left++ : scoreCounter.value.right++
}
</script>

<template>
	<div class="d-flex justify-center my-10">
		<v-btn
			v-if="!showChart"
			class="mr-2"
			height="50"
			min-width="100"
			@click="onPlay('people')"
		>
			PLAY: PEOPLE
		</v-btn>
		<v-btn
			v-if="!showChart"
			class="mr-2"
			height="50"
			min-width="100"
			@click="onPlay('starships')"
		>
			PLAY: STARSHIPS
		</v-btn>
		<v-btn
			height="50"
			min-width="100"
			@click="showChart = !showChart"
		>
			{{ showChart ? 'Hide chart' : 'Show chart' }}
		</v-btn>
	</div>
	<template v-if="!showChart">
		<template v-if="mode === 'people'">
			<div v-if="store.randomPeople?.length" class="d-flex justify-space-around">
				<div>
					<span>SCORE: {{ scoreCounter.left }}</span>
					<AppCard
						:name="store.randomPeople[0].name"
						:surname="store.randomPeople[0].surname"
						:data="store.randomPeople[0].mass"
						:isWinning="store.randomPeople[0].mass > store.randomPeople[1].mass"
						img="https://i.pinimg.com/736x/b0/ae/a3/b0aea3afb80fe80ad3d36d399f0a88fd.jpg"
					/>
				</div>
				<div>
					<span>SCORE: {{ scoreCounter.right }}</span>
					<AppCard
						:name="store.randomPeople[1].name"
						:surname="store.randomPeople[1].surname"
						:data="store.randomPeople[1].mass"
						:isWinning="store.randomPeople[1].mass > store.randomPeople[0].mass"
						img="https://cdn4.sharechat.com/WhatsAppprofiledpboys_cf1878a_1658641411937_sc_cmprsd_75.jpg"
					/>
				</div>
			</div>
		</template>
		<template v-else>
		<div v-if="store.randomStarships?.length" class="d-flex justify-space-around">
			<div>
				<span>SCORE: {{ scoreCounter.left }}</span>
				<AppCard
					:name="store.randomStarships[0].name"
					:data="store.randomStarships[0].crew"
					:isWinning="store.randomStarships[0].crew > store.randomStarships[1].crew"
					img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZKC-lTUh5IrJ1QS_m7icuIADmDAxm_tTjA&s"
				/>
			</div>
			<div>
				<span>SCORE: {{ scoreCounter.right }}</span>
				<AppCard
					:name="store.randomStarships[1].name"
					:data="store.randomStarships[1].crew"
					:isWinning="store.randomStarships[1].crew > store.randomStarships[0].crew"
					img="https://www.tesmanian.com/cdn/shop/articles/aej8qqnumnk41.jpg?v=1585455824&width=500"
				/>
			</div>
		</div>
	</template>
	</template>
	<AppBarChart v-if="showChart" :props-data="[scoreCounter.left, scoreCounter.right]" />
</template>

<style scoped>
</style>
