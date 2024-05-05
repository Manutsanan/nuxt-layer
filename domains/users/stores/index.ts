import { defineStore } from 'pinia'

export const useStoreUsers = defineStore({
  id: 'users',
  state: () => ({
    sharedData: 'default data users'
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