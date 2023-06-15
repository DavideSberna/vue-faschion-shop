<template>
  
</template>

<script>

import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ProductAll',
    data(){
        return{
            products: [],
            store,

        };
    },
    methods: {
        getData(){
            axios.get(`${store.apiUrl}/products`).then((res)=>{
                console.log(res);
            })
        }
    },
    mounted(){
        this.getData();

    }

}
</script>

<style>

</style>