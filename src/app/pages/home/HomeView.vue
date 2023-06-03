<template>
    {{ environment.type }}
    <button @click="modal.hide()">add</button>
</template>
<script lang="ts">
import { HomeView } from './HomeView'
export default HomeView
</script>
