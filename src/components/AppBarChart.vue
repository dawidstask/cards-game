<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

defineProps({
	propsData: Array<Number>
})
</script>

<template>
	<Bar
		id="my-chart-id"
		class="mr-10 ml-10 mt-10"
		:options="{
			responsive: true
		}"
		:data="{
			labels: ['LEFT', 'RIGHT'],
			datasets: [{
				data: propsData,
				backgroundColor: ['#f87979', 'grey'],
			}]
		}"
	/>
</template>

<style scoped>
</style>
