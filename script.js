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
var historyEl = document.querySelector('transaction');



function init () {
     balanceEl.innerHTML = 'R${state.balance}';
     incomeEl.innerHTML = 'R${state.income}';
     expenseEl.innerHTML = 'R${state.expense}';

     var historyEl;

     for (var i = 0; i < state.historyEl.length; i++) {
          item = state.historyEl[i];
          historyEl = document.createElement('li');
          historyEl.append(item.name);

          historyEl.appendChild(historyEl);

          containerEl = document.createElement('div');
          amountEl = document.createElement
     }
0.61654
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