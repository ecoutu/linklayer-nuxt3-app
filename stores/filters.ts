import { acceptHMRUpdate, defineStore } from 'pinia';

export const useFiltersStore = defineStore('filterStore', {
  state: () => {
    return {
      filtersList: ['youtube', 'twitter'],
    };
  },
  actions: {},
  getters: {
    getFilter(state) {
      return (filterIdx: number) => state.filtersList[filterIdx];
    },
  },
});

if (import.meta.hot != null) {
  import.meta.hot.accept(acceptHMRUpdate(useFiltersStore, import.meta.hot));
}
