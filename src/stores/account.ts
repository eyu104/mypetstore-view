import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const accountStore = defineStore("account",{
    state: () => {
        return {
            username: '',
            password: '',
            email: '',
            firstName:'',
            lastName:'',
            status:'',
            address1:'',
            address2:'',
            city:'',
            state:'',
            zip:'',
            country:'',
            phone:'',
            favouriteCategoryId:'',
            languagePreference:'',
            listOption:false,
            bannerOption:false,
            bannerName:'',
        }

    },
    actions: {

    },
    getters: {

    }
})