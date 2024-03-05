<template>
    <h4>Your balance</h4>
 <h1 id="balance">${{ store.TotalBlance }}</h1>
 
</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
 const store = useCounterStore()


</script>