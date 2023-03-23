import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const accountStore = defineStore("account",{
    state: () => {
        return {
            user: {},
            token: ''
        }

    },
    actions: {

    },
    getters: {

    }
})