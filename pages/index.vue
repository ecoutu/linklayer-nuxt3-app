<script lang="ts" setup>
import { useFiltersStore } from '~/stores/filters';
const filtersStore = useFiltersStore();
let { filtersList } = filtersStore;
filtersStore.$subscribe((mutation, state) => {
  filtersList = state.filtersList;
});
</script>

<template>
  <div>
    {{ filtersStore.getFilter(1) }}
  </div>
</template>

<style scoped></style>
