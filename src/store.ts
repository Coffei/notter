import { reactive, watch } from "vue"

export interface Note { id: string; title: string; text: string; }

// initialize notes from local storage
const storedNotes: Note[] = JSON.parse(localStorage.getItem('notes') || '[]')
export const notes: Note[] = reactive(storedNotes)

// store notes back to local storage on any change
watch([notes], () => {
    localStorage.setItem('notes', JSON.stringify(notes))
})

export const addNote = () => {
    const newNote: Note = { id: crypto.randomUUID(), title: '', text: '' }
    notes.push(newNote)
    return newNote
}
