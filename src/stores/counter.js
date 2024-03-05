
import { defineStore } from 'pinia'

export const useCounterStore = defineStore( 'counter', {
  
  state:() => ({
    expense :0,
    income:0,
    TotalBlance:0,
    transaction:[ ]
  
  }),
  getters :{
    Income: (state) => {return state.income},
    Expense: (state) => {return state.expense},
   Blance: (state) => {return state.expense - state.income },
   Transactions :(state)=> {return state.transaction}
  },
  actions :{
 addtransction(title,money)
 {
  const trans={
    title:title,
    money:money
  }
      this.transaction.push(trans)
 },
 deletetranstion(index){
  const bal= this.transaction[index].money
 this.transaction.splice(index, 1) 
  this.changeTotalBalance(Number(-bal))
  this.changeIncomeExpens(Number(-bal))


 },
 changeTotalBalance (val){
   this.TotalBlance += val;
 },
 changeIncomeExpens(money){

  if(money>0)this.income +=money
  else this.expense -=money;
   

 }
  }
 
})
