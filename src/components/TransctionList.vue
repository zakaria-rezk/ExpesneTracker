<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="trans in transctions" :key="trans.id" :class="trans.money >0 ? 'plus': 'minus'">
               <span>{{ trans.title }}</span> 
                <span>{{ trans.money }}</span>

            <button class="delete-btn" @click="deleteT(trans)">
        x
      </button>
        </li>
    </ul>
     

</template>
<script setup>   
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
import TransctionItem from './TransctionItem.vue'

const transctions =store.transaction
const deleteT = (val) =>{

   const index= transctions.findIndex(trans => trans.title === val.title && trans.money === val.money)
    store.deletetranstion(index)
}

</script>