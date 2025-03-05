<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { notes, addNote } from '../store'
import NoteListItem from './NoteListItem.vue';

const router = useRouter()
const route = useRoute()

const removeNote = (index: number) => {
    // remove note
    const [deleted] = notes.splice(index, 1)
    // re-route to home if I was on the note url
    if (route.name == 'note' && route.params.id == deleted.id) {
        router.replace('/')
    }
}

const addNoteAndSwitch = () => {
    const note = addNote()
    router.push(`/notes/${note.id}`)
}
</script>

<template>
    <div class="border-r-2 border-lime-800">
        <button class="w-full bg-slate-900 hover:bg-lime-950 p-4 cursor-pointer" @click="addNoteAndSwitch">
            Create new note
        </button>
        <NoteListItem v-for="(note, index) in notes" :note="note" :index="index" @remove="removeNote" />
    </div>
</template>
