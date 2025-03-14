<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpload, faDownload } from '@fortawesome/free-solid-svg-icons'
import { RouterView } from 'vue-router'
import { exportNotes } from './import'
</script>

<template>
    <div class="h-full flex flex-col">
        <header class="h-16 px-4 border-b-2 border-lime-800 flex justify-between items-center bg-slate-800">
            <h1 class="text-2xl font-medium text-white">Notter</h1>
            <div>
                <a @click="exportNotes" class="rounded p-2 cursor-pointer hover:bg-slate-600"
                    title="Download the notes.">
                    <FontAwesomeIcon :icon="faDownload" />
                </a>
                <a class="rounded p-2 mr-2 cursor-pointer hover:bg-slate-600" title="Upload the notes.">
                    <FontAwesomeIcon :icon="faUpload" />
                </a>
                <a href="https://github.com/Coffei/notter" class="rounded p-2 hover:bg-slate-600" target="_blank"
                    title="See the source code on GitHub!">
                    <FontAwesomeIcon :icon="faGithub" />
                </a>
            </div>
        </header>

        <div class="flex-1">
            <RouterView />
        </div>
    </div>
</template>
