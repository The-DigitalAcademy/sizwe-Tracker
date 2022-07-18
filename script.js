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
var addIncome = document.getElementById('addIncome')
var addExpense = document.getElementById('addExpense')


function init() {
     income.innerHTML = state.income
     expense.innerHTML = state.expense
     balance.innerHTML = state.balance
}

init()