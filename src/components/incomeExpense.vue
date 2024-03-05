<template>
    <div class="inc-exp-container">
      <div>
        <h4 >Income</h4>
        <p id="money-plus" class="money plus">+{{ store.Income }}</p>
      </div>
      <div>
        <h4 >Expense</h4>
        <p id="money-minus" class="money minus">-{{ store.Expense }}</p>
      </div>
    </div>
  </template>
  <script setup>
import { useCounterStore } from "@/stores/counter";
 const store = useCounterStore()
 


   </script>