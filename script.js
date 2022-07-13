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

var balanceEl = document.querySelector('balance');
var incomeEl = document.querySelector('income');
var expenseEl = document.querySelector('expense');
var transactionEl = document.querySelector('transaction');



function init () {
     balanceEl.innerHTML = 'R${state.balance}';
     incomeEl.innerHTML = 'R${state.income}';
     expenseEl.innerHTML = 'R${state.expense}';

     var transactionEl;

     for (var i = 0; i < state.transactionEl.length; i++) {
          item = state.transactionEl[i];
          transactionEl = document.createElement('li');
          transactionEl.append(item.name);

          transactionEl.appendChild(transactionEl);

          containerEl = document.createElement('div');
          amountEl
     }

}

function incomeAdd() {
    var names = document.getElementById('name').value

      names.push('name')

      // console.log(name)
      }
 

 function expenseAdd() {
     var names = document.getElementById('name').value

     names.push('name')
      // console.log('sizwe')
 }

 function init() {
      //   console.log('sine')
 }

init();