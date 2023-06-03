<template>asda</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useModalRef } from 'vue-modal-provider'

const { visible } = useModalRef()
watch(visible, () => {
    console.log(visible)
})
</script>
