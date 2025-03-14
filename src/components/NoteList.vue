<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { notes, addNote } from '../store'
import NoteListItem from './NoteListItem.vue';
import NoteOrder from './NoteOrder.vue';
import { computed, ref } from 'vue';
import type { Note } from '../store';

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
const order = ref('update_desc')

type DisplayNote = { note: Note, index: number }
const displayNotes = computed(() => {
    let sortFn: (a: DisplayNote, b: DisplayNote) => number = (a, b) => ((b.note.updatedAt || 0) - (a.note.updatedAt || 0))
    if (order.value == 'update_asc') {
        sortFn = (a, b) => ((a.note.updatedAt || 0) - (b.note.updatedAt || 0))
    } else if (order.value == 'create_desc') {
        sortFn = (a, b) => ((b.note.createdAt || 0) - (a.note.createdAt || 0))
    } else if (order.value == 'create_asc') {
        sortFn = (a, b) => ((a.note.createdAt || 0) - (b.note.createdAt || 0))
    } else if (order.value == 'title_desc') {
        sortFn = (a, b) => (b.note.title.localeCompare(a.note.title))
    } else if (order.value == 'title_asc') {
        sortFn = (a, b) => (a.note.title.localeCompare(b.note.title))
    }
    return notes.map((note, index) => ({ note, index })).sort(sortFn)
})
</script>

<template>
    <div class="border-r-2 border-lime-800">
        <button class="w-full bg-slate-900 hover:bg-lime-950 p-4 cursor-pointer" @click="addNoteAndSwitch">
            Create new note
        </button>
        <div class="flex justify-between">
            <div />
            <NoteOrder :selected="order" @change="(selected) => order = selected" />
        </div>
        <NoteListItem v-for="{ note, index } in displayNotes" :note="note" :index="index" @remove="removeNote" />
    </div>
</template>
