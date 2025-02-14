<script setup lang="ts">
import { notes } from '@/store';
import { computed } from 'vue';

const props = defineProps({ id: String })
const note = computed(() => notes.find(({ id }) => id == props.id))
</script>

<template>
    <div v-if="!note" class="text-center mt-24 text-2xl text-slate-400">Note not found.</div>
    <div v-else class="h-full flex flex-col gap-4 px-4 py-2">
        <input type="text" class="py-1 focus:outline-none no-underline text-xl border-b-2 border-b-lime-700"
            v-model.trim="note.title" placeholder="Enter note title" />
        <textarea class="flex-1 p-2 resize-none focus:outline-none bg-slate-900" v-model="note.text" placeholder="Enter note content"></textarea>
    </div>
</template>
