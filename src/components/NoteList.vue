<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useRoute, useRouter } from 'vue-router';
import { notes, addNote } from '../store'

const router = useRouter()
const route = useRoute()

const addNoteAndSwitch = () => {
    const note = addNote()
    router.push(`/notes/${note.id}`)
}

const removeNote = (index: number) => {
    // remove note
    const [deleted] = notes.splice(index, 1)
    // re-route to home if I was on the note url
    if (route.name == 'note' && route.params.id == deleted.id) {
        router.replace('/')
    }
}
</script>

<template>
    <div class="border-r-2 border-lime-800">
        <button class="w-full bg-slate-900 hover:bg-lime-950 p-4 cursor-pointer" @click="addNoteAndSwitch">
            Create new note
        </button>
        <RouterLink v-for="(note, index) in notes" :to="`/notes/${note.id}`"
            class="group/note block relative p-4 border-b-1 border-b-lime-900 last:border-b-0 cursor-pointer hover:bg-lime-950"
            activeClass="bg-slate-800">
            <div v-if="note.title" class="font-semibold">{{ note.title }}</div>
            <div v-else class="font-semibold text-slate-400">Untitled</div>
            <div class="text-slate-400 text-sm overflow-hidden text-nowrap text-ellipsis ">{{ note.text }}</div>
            <button
                class="absolute top-2 right-2 px-2 py-1 border border-orange-600 bg-orange-800 rounded cursor-pointer hidden group-hover/note:block"
                @click.stop.prevent="removeNote(index)"><FontAwesomeIcon :icon="faTrashCan" /></button>
        </RouterLink>
    </div>
</template>
