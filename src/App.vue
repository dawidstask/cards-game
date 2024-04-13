<script setup lang="ts">
import {useStore} from "./store";

const store = useStore()
store.getPeople()
store.getStarships()
</script>

<template>
  <div>
		<span>{{store.people}}</span>
		<span>{{store.starships}}</span>
  </div>
</template>

<style scoped>

</style>
