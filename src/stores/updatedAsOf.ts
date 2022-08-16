import { defineStore } from 'pinia'

export const useUpdatedAsOfStore = defineStore('updatedAsOf', {
  state: () => ({
    timestamp: ''
  }),

  getters: {
    getTimestamp (state) {
      return state.timestamp
    }
  },

  actions: {
    update (payload: string) {
      this.timestamp = payload
    }
  }
})
