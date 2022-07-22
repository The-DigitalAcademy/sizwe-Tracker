var state = {
   income: 0,
   expense: 0,
   balance: 0, 
   transaction: [
             {type: 'income', text: 'salary', value: 5000},
   ]
}

var income = document.getElementById('income')
var expense = document.getElementById('expense')
var balance = document.getElementById('balance')
var detail = document.getElementById('detail')
var amount = document.getElementById('amount')
var addincome = document.getElementById('addincome')
var addexpense = document.getElementById('addexpense')
var transaction = document.getElementById('transaction')


function init() {
     income.innerHTML = state.income
     expense.innerHTML = state.expense
     balance.innerHTML = state.balance
       console.log('init')
 }


function addIncome() {
    let inputdetail = document.getElementById("").value;
    detail.push(inputdetail);
    // console.log('', detail.value)
    // console.log('', amount.value)
}

function addExpense() {
console.log('', detail.value)
console.log('', amount.value)
}

// transaction.innerHTML = 'addIncome'

// for (let i = 0; i <state.transaction.length; i++) {
//     let transaction = state.transaction[i]

//     if((transaction.type = 'income')){
//          transaction.innerHTML +=`<div class="transaction">Transaction</div>`;
//         <div class="text">${transaction.detail} salary </div>
//         console.log('income')
//     }
//  }

init() 