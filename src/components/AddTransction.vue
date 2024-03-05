<template>
<h3>Add new transaction</h3>
  <form id="form" @submit.prevent="submit(title,money)">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..."  v-model="title" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="text"
        id="amount"
        placeholder="Enter amount..."
        v-model="money"
      />
    </div>
    <button class="btn">Add transaction</button>
  </form>


</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
import { reactive, ref } from "vue";
 const store = useCounterStore();
 //reactive 
 const money =ref(null)
 const title =ref(null)
//

 const submit =(text,amount) =>{
  console.log(!isNaN(amount))
  if ( !isNaN(amount) && text !=null && amount !=null){
   
    store.addtransction(text,amount)
    store.changeTotalBalance(+amount)
    store.changeIncomeExpens(+amount)
    money.value=null
    title.value=null
  }
 
 }

</script>