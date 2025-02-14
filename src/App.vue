<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="h-full flex flex-col">
        <header class="h-16 px-4 border-b-2 border-lime-800 flex items-center bg-slate-800">
            <h1 class="text-2xl font-medium text-white">Notter</h1>
        </header>

        <div class="flex-1">
            <RouterView />
        </div>
    </div>
</template>
