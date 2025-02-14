<script setup lang="ts">
import NoteList from '@/components/NoteList.vue'
import Note from '@/components/Note.vue'
</script>

<template>
    <main class="w-full h-full grid grid-cols-[20%_auto]">
        <NoteList />
        <Note :id="$route.params.id as string" />
    </main>
</template>
