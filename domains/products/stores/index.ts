import { defineStore } from 'pinia'

export const useStoreProducts = defineStore({
  id: 'products',
  state: () => ({
    sharedData: 'default data products'
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