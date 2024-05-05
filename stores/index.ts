import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    sharedData: 'default data'
  }),
  actions: {
    updateSharedData(data: string) {
      this.sharedData = data
    }
  },
  getters: {
    getData(state) {
      return state.sharedData
    }
  },
  persist: true,
})