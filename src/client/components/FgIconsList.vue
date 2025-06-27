<script setup lang="ts">
import { icons } from "@iconify-json/bi";
import { computed, ref, onMounted } from "vue";
const iconNames = computed(() => Object.keys(icons.icons))
const currentPage = ref(1)
const perPage = ref(24)
const search = ref('')
const filteredIcons = computed(() => iconNames.value.filter(icon => icon.toLowerCase().includes(search.value.toLowerCase())))
const pageIcons = computed(() => filteredIcons.value.slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value))
const pagesCount = computed(() => Math.ceil(filteredIcons.value.length / perPage.value))
const nextPage = (): void => {
    if (currentPage.value < pagesCount.value) {
        currentPage.value++
    }
}
const prevPage = (): void => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}
const getSvg = (name: string): string | null => {
    return icons.icons[name] && icons.icons[name].body ? `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>${icons.icons[name].body}</svg>` : null
}
const iconStyle = (name: string) => {
    const iconSvg = getSvg(name)
    const iconUrl = iconSvg ? encodeURI(`data:image/svg+xml,${iconSvg}`) : ''
    return {
        '--svg': `url("${iconUrl}")`
    }
}

</script>
<template>
    <div>
        <div class="flex justify-between">
            <div class="form-control-container xs inline-flex">
                <span class="start-icon">
                    <i class="icon bi-search"></i>
                </span>
                <input type="search" v-model="search" class="form-control has-start-icon xs pill" placeholder="search">
            </div>
            <div class="inline-flex">
                <fg-select v-model="perPage" placeholder="Entries" class="xs pill" :options="[
                    {
                        label: '18',
                        value: 18,
                    },
                    {
                        label: '24',
                        value: 24,
                    },
                    {
                        label: '30',
                        value: 30,
                    },
                    {
                        label: '36',
                        value: 36,
                    },
                    {
                        label: '42',
                        value: 42,
                    },
                ]" />
            </div>
        </div>


        <div v-if="pageIcons.length"
            class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-3 mb-4">
            <div v-for="(icon, index) in pageIcons" :key="index"
                class="flex flex-col items-center bg-gray/5 dark:bg-gray-700 rounded-lg hover:text-primary cursor-pointer">
                <span class="icon w-10 h-10 mt-6" :style="iconStyle(icon)"></span>
                <div class="my-3 text-center text-xs" v-text="icon" />
            </div>
        </div>
        <div v-else class="alert alert-info alert-soft sm my-5 flex-space-2">
            <i class="icon bi-info-circle"></i>
            <div class="grow">
                No icons found
            </div>
        </div>

        <div class="flex items-center justify-between text-xs p-3">
            <div>
                <button type="button" @click="prevPage" aria-label="Previuos page" class="btn btn-primary xs"
                    :disabled="currentPage <= 1">
                    <fg-icon icon="bi-chevron-left" />
                    <span>Previous</span>
                </button>
            </div>
            <div>
                <span v-text="`page ${currentPage} of ${pagesCount}`"></span>
            </div>
            <div>
                <button type="button" @click="nextPage" aria-label="next page" class="btn btn-primary xs"
                    :disabled="currentPage >= pagesCount">
                    <span>Next</span>
                    <fg-icon icon="bi-chevron-right" />
                </button>
            </div>
        </div>
    </div>

</template>