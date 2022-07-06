var state = {
                balance: 0,
                income: 0,
                expense: 0,
                names: [],
                history: [
                     {name:'name', amount: 0, type: 'income'},  
                     {name:'name', amount: 0, type: 'expense'},         
                ]
}

var balanceEl = document.getElementById('balance');
var incomeEl = document.getElementById('income');
var expenseEl = document.getElementById('expense');
var transactionEl = document.getElementById('transaction');


function incomeAdd() {
     var names = document.getElementById('name').value

     names.push('name')

     console.log(name)
}

function expenseAdd() {
     // console.log('sizwe')
}

function init() {
     //   console.log('sine')
}

init();