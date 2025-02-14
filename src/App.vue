<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="h-full flex flex-col">
        <header class="h-16 px-4 border-b-2 border-lime-800 flex justify-between items-center bg-slate-800">
            <h1 class="text-2xl font-medium text-white">Notter</h1>
            <a href="https://github.com/Coffei/notter" target="_blank" title="See the source code on GitHub!"><FontAwesomeIcon :icon="faGithub"/></a>
        </header>

        <div class="flex-1">
            <RouterView />
        </div>
    </div>
</template>
