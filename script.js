var state = {
   income: 0,
   expense: 0,
   balance: 0, 
   transaction: [
             {type: 'income', text: 'salary', value: 5000},
             {type: 'expense', text: 'transport', value: 5000}
   ]
}

var income = document.getElementById('income')
var expense = document.getElementById('expense')
var balance = document.getElementById('balance')
var detail = document.getElementById('detail')
var amount = document.getElementById('amount')
var addincome = document.getElementById('addincome')
var addexpense = document.getElementById('addexpense')


function init() {
     income.innerHTML = state.income
     expense.innerHTML = state.expense
     balance.innerHTML = state.balance
     console.log('init')
}

function addIncome() {
    console.log('detail', detail.value)
    console.log('amount', amount.value)
}

function addExpense() {
console.log('detail', detail.value)
console.log('amount', amount.value)
}
init()