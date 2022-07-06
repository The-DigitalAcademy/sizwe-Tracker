var state = {
                balance: 0,
                income: 0,
                expense: 0,
                history: [
                     {name:'name', amount: 0, type: 'income'},  
                     {name:'name', amount: 0, type: 'expense'},         
                ]
}

var balanceEl = document.getElementById('balance');
var incomeEl = document.getElementById('income');
var expenseEl = document.getElementById('expense');
var transactionEl = document.getElementById('transaction');


function init() {

       balanceEl.innerHTML =R$`{state.balance}`;
       console.log('balance')
}