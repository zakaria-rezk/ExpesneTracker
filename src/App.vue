<template>
 <TheHeader />
 <Balance />
 <incomeExpense />
 <TransctionList  />
 <AddTransction />
</template>
<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import Balance from './components/Balance.vue';
import incomeExpense from './components/incomeExpense.vue';
import TransctionList from './components/TransctionList.vue';
import AddTransction from './components/AddTransction.vue';
///
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();


</script>