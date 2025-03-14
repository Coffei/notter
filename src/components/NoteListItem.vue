<script setup lang="ts">
import type { Note } from '@/store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

defineProps<{ note: Note, index: number }>()
const emit = defineEmits<{ remove: [index: number] }>()

const formatDate = (date: number | undefined) => {
    if (date) {
        return new Date(date).toLocaleString()
    }
}
</script>
<template>
    <RouterLink :to="`/notes/${note.id}`"
        class="group/note block relative p-4 border-b-1 border-b-lime-900 last:border-b-0 cursor-pointer hover:bg-lime-950"
        activeClass="bg-slate-800">
        <div v-if="note.title" class="font-semibold text-nowrap overflow-hidden ellipsis" :title="note.title">{{
            note.title }}
        </div>
        <div v-else class="font-semibold text-slate-400">Untitled</div>
        <div class="flex flex-wrap items-end justify-between text-slate-400">
            <div v-if="note.createdAt != null" class="text-sm">Created at {{ formatDate(note.createdAt) }}</div>
            <div v-if="note.updatedAt != null" class="text-sm">Updated at {{ formatDate(note.updatedAt) }}</div>
        </div>
        <div class="text-slate-400 text-sm overflow-hidden text-nowrap text-ellipsis ">{{ note.text }}</div>
        <button
            class="absolute top-2 right-2 px-2 py-1 border border-orange-600 bg-orange-800 rounded cursor-pointer hidden group-hover/note:block"
            @click.stop.prevent="emit('remove', index)">
            <FontAwesomeIcon :icon="faTrashCan" />
        </button>
    </RouterLink>
</template>
