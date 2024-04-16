<script setup lang="ts">
defineProps({
	name: String,
	surname: String,
	data: Number,
	img: String
})
</script>

<template>
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
</template>

<style scoped>
</style>
