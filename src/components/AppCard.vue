<script setup lang="ts">
defineProps({
	name: String,
	surname: String,
	data: Number,
	img: String,
	isWinning: Boolean
})
</script>

<template>
	<div class="d-flex flex-column" :class="{ green: isWinning }">
		<p class="my-2">{{ isWinning ? 'WINNER' : 'LOSER' }}</p>
		<v-card
			class="mx-auto"
			width="400"
		>
			<v-img
				class="align-end text-white"
				height="200"
				:src="img"
				cover
			>
				<v-card-title>{{ name }} {{ surname }}: {{ data }}</v-card-title>
			</v-img>
		</v-card>
	</div>
</template>

<style scoped>
.green {
	color: green;
}
.green .v-card {
	border: 2px solid green;
}
</style>
