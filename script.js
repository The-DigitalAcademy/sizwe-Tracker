var state = {
                balance: 0,
                income: 0,
                expense: 0,
                names: [],
                historys: [
                     {name:'name', amount: 0, type: 'income'},  
                     {name:'name', amount: 0, type: 'expense'},         
                ]
}

var balanceEl = document.querySelector('balance');
var incomeEl = document.querySelector('income');
var expenseEl = document.querySelector('expense');
var historyEl = document.querySelector('history');



function init () {
     balanceEl.innerHTML = 'R${state.balance}';
     incomeEl.innerHTML = 'R${state.income}';
     expenseEl.innerHTML = 'R${state.expense}';

     var historyEl;

     for (var i = 0; i < state.historyEl.length; i++) {
          item = state.historyEl[i];
          historyEl = document.createElement('li');
          historyEl.append(item.name);0

          historyEl.appendChild(historyEl);

          containerEl = document.createElement('div');
          amountEl = document.createElement
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