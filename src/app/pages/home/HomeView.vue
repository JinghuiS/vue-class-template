<template>
  <div>{{ abc }}</div>
  {{ environment.type }}
  <button @click="abc++">add</button>
</template>
<script lang="ts">
import { HomeView } from './HomeView'
export default HomeView
</script>
