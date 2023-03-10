import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOMDBStore = defineStore('movie', {
  state: () => ({
    movieId: undefined,
  }),
  actions: {
    addData(value: any) {
      this.movieId = value
    },
  },
})
