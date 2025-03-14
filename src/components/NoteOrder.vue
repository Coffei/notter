<script setup lang="ts">
defineProps<{ selected: string }>()
const orders = [
    { value: "update_desc", name: "Last updated at" },
    { value: "update_asc", name: "First updated at" },
    { value: "create_desc", name: "Last created at" },
    { value: "create_asc", name: "First created at" },
    { value: "title_asc", name: "Title ascending" },
    { value: "title_desc", name: "Title descending" }
]
const emit = defineEmits<{ change: [order: string] }>()
const change = (e: Event) => {
    if (e.currentTarget) {
        emit('change', (e.currentTarget as HTMLSelectElement).value)
    }
}
</script>
<template>
    <div class="px-2 py-1 text-sm underline decoration-dashed">
        <select @change="change" class="appearance-none cursor-pointer border-b-1 border-dashed">
            <option v-for="item in orders" :selected="selected == item.value" :value="item.value">{{ item.name }}
            </option>
        </select>
    </div>
</template>
