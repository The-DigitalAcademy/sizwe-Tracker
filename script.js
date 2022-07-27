const budgetValue = document.querySelector(".budget-value");
const budgetIT = document.querySelector(".budget-it");
const budgetET = document.querySelector(".budget-et");
const budget = document.querySelector("#budget");
const budgetIncomeValue = document.querySelector(".budget-income-value");
const budgetExpenseValue = document.querySelector(".budget-expense-value");
const newName = document.querySelector("#new-name");
const newValue = document.querySelector("#new-value");
const incomeUl = document.querySelector(".income-ul");
const expenseUl = document.querySelector(".expense-ul");
const newSelect = document.querySelector("#new-select");
const addButton = document.querySelector("#add-button");
const incomeLi = document.querySelector(".income-li");
const expenseLi = document.querySelector(".expense-li");
const deleteButton = document.querySelector(".delete-button");
const newBudget = document.querySelector("#new-budget");

var total = [];
var index_number = 0;
var dS = "R";
var income = 0;
var expense = 0;
var amount_left = 0;

//Event Listener
addButton.addEventListener("click", function(){addToList(null);});
//Functions
//FUNCTION addToList
function addToList(selection) {
event.preventDefault();
selectOption = document.getElementById("new-select").value;
if ((selectOption == "new-income" && selection == null) || selection == "newIncome") {
var income_item = [];
income_item.push("newIncome");
income_item.push(newName.value);
income_item.push(parseFloat(newValue.value).toFixed(2));
total[index_number] = income_item;
window.localStorage.setItem("total",JSON.stringify(total));
const incomeDiv = document.createElement("div");
incomeDiv.id = "id" + index_number;
incomeDiv.classList.add("income-div-item");
const newIncome = document.createElement("li");
newIncome.innerText =
newName.value + " " + dS + parseFloat(newValue.value).toFixed(2);
newIncome.classList.add("income-li");
incomeDiv.appendChild(newIncome);
incomeUl.appendChild(incomeDiv);
const deleteButton = document.createElement("button");
deleteButton.id = index_number;
deleteButton.classList.add("delete-button");
deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
deleteButton.onclick = function () {
deleteCheck("newIncome", this.id);
};
incomeDiv.appendChild(deleteButton);
index_number++;
income = (parseFloat(income) + parseFloat(newValue.value)).toFixed(2);
amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
budgetIncomeValue.innerText = dS + income;
budgetValue.innerText = dS + amount_left;
newName.value = "";
newValue.value = "";
} else {
if ((selectOption == "new-expense" && selection == null) || selection == "newExpense") {
var expense_item = [];
expense_item.push("newExpense");
expense_item.push(newName.value);
expense_item.push(parseFloat(newValue.value).toFixed(2));
total[index_number] = expense_item;
window.localStorage.setItem("total",JSON.stringify(total));
const expenseDiv = document.createElement("div");
expenseDiv.id = "id" + index_number;
expenseDiv.classList.add("expense-div-item");
const newExpense = document.createElement("li");
newExpense.innerText =
newName.value + " " + dS + parseFloat(newValue.value).toFixed(2);
newExpense.classList.add("expense-li");
expenseDiv.appendChild(newExpense);
expenseUl.appendChild(expenseDiv);
const deleteButton = document.createElement("button");
deleteButton.id = index_number;
deleteButton.onclick = function () {
deleteCheck("newExpense", this.id);
};
index_number++;
deleteButton.classList.add("delete-button");
deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
expenseDiv.appendChild(deleteButton);
expense = (parseFloat(expense) + parseFloat(newValue.value)).toFixed(2);
amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
budgetExpenseValue.innerText = dS + expense;
budgetValue.innerText = dS + amount_left;
newName.value = "";
newValue.value = "";
}
}
}
function deleteCheck(target, id) {
const item = document.getElementById("id" + id);
if (target == "newIncome") {
income = (parseFloat(income) - parseFloat(total[parseInt(id)][2])).toFixed(2);
amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
budgetIncomeValue.innerText = dS + income;
budgetValue.innerText = dS + amount_left;
item.className = "fall";
item.addEventListener("transitionend", function () {
item.remove();
});
setTimeout(function(){
total.splice(parseInt(id), 1);
window.localStorage.setItem("total",JSON.stringify(total));
for(var a=parseInt(id);a<total.length;a++){
var old_id = String("id" + parseInt(a+1));
var new_id = String("id" + parseInt(a));
console.log(new_id);
document.getElementById(old_id).id = new_id;
document.getElementById(String(parseInt(a+1))).id = String(parseInt(a));
};
},1100);
} else {
expense = (parseFloat(expense) - parseFloat(total[parseInt(id)][2])).toFixed(2);
amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
budgetExpenseValue.innerText = dS + expense;
budgetValue.innerText = dS + amount_left;
item.className = "fall";
item.addEventListener("transitionend", function () {
item.remove();
});
setTimeout(function(){
total.splice(parseInt(id), 1);
window.localStorage.setItem("total",JSON.stringify(total));
for(var a=parseInt(id);a<total.length;a++){
var old_id = String("id" + parseInt(a+1));
var new_id = String("id" + parseInt(a));
console.log(new_id);
document.getElementById(old_id).id = new_id;
document.getElementById(String(parseInt(a+1))).id = String(parseInt(a));
};
},1100);
}
}

function get_total(){
var localstorageitem = window.localStorage.getItem("total");
if(localstorageitem != null){
total = JSON.parse(localstorageitem);
for(var a=0;a<total.length;a++){
index_number = a;
newName.value = total[a][1];
newValue.value = parseFloat(total[a][2]);
addToList(total[a][0]);
};
index_number = total.length;
console.log(total.toString());
};
}
window.onload = function(){
get_total();
};

// const budgetValue = document.querySelector(".budget-value");
// const budgetIT = document.querySelector(".budget-it");
// const budgetET = document.querySelector(".budget-et");
// const budget = document.querySelector("#budget");
// const budgetIncomeValue = document.querySelector(".budget-income-value");
// const budgetExpenseValue = document.querySelector(".budget-expense-value");
// const newName = document.querySelector("#new-name");
// const newValue = document.querySelector("#new-value");
// const incomeUl = document.querySelector(".income-ul");
// const expenseUl = document.querySelector(".expense-ul");
// const newSelect = document.querySelector("#new-select");
// const addButton = document.querySelector("#add-button");
// const incomeLi = document.querySelector(".income-li");
// const expenseLi = document.querySelector(".expense-li");
// const deleteButton = document.querySelector(".delete-button");
// const newBudget = document.querySelector("#new-budget");
// var total = [];
// console.log(total);
// var index_number = 0;
// var dS = "R";
// var income = 0;
// var expense = 0;
// var amount_left = 0;
// //Event Listener
// addButton.addEventListener("click", addToList);
// //Functions
// //FUNCTION addToList
// function addToList(event) {
//   event.preventDefault();
//   selectOption = document.getElementById("new-select").value;
//   if (selectOption == "new-income") {
//     const incomeDiv = document.createElement("div");
//     incomeDiv.id = "id" + index_number;
//     incomeDiv.classList.add("income-div-item");
//     const newIncome = document.createElement("li");
//     newIncome.innerText =
//       newName.value + " " + dS + parseFloat(newValue.value).toFixed(2);
//     newIncome.classList.add("income-li");
//     total[index_number] = parseFloat(newValue.value).toFixed(2);
//     console.log(total[index_number]);
//     incomeDiv.appendChild(newIncome);
//     // saveLocalEntries(newName.value);
//     incomeUl.appendChild(incomeDiv);
//     const deleteButton = document.createElement("button");
//     deleteButton.value = index_number;
//     deleteButton.classList.add("delete-button");
//     deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
//     deleteButton.onclick = function () {
//       deleteCheck("newIncome", this.value);
//     };
//     incomeDiv.appendChild(deleteButton);
//     index_number++;
//     income = (parseFloat(income) + parseFloat(newValue.value)).toFixed(2);
//     amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
//     budgetIncomeValue.innerText = dS + income;
//     budgetValue.innerText = dS + amount_left;
//     console.log(index_number);
//   } else {
//     if (selectOption == "new-expense") {
//       //ExpenseDiv
//       const expenseDiv = document.createElement("div");
//       expenseDiv.id = "id" + index_number;
//       expenseDiv.classList.add("expense-div-item");
//       const newExpense = document.createElement("li");
//       newExpense.innerText =
//         newName.value + " " + dS + parseFloat(newValue.value).toFixed(2);
//       newExpense.classList.add("expense-li");
//       total[index_number] = parseFloat(newValue.value).toFixed(2);
//       expenseDiv.appendChild(newExpense);
//       expenseUl.appendChild(expenseDiv);
//       const deleteButton = document.createElement("button");
//       deleteButton.value = index_number;
//       deleteButton.onclick = function () {
//         deleteCheck("newExpense", this.value);
//       };
//       index_number++;
//       deleteButton.classList.add("delete-button");
//       deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
//       expenseDiv.appendChild(deleteButton);
//       expense = (parseFloat(expense) + parseFloat(newValue.value)).toFixed(2);
//       amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
//       budgetExpenseValue.innerText = dS + expense;
//       budgetValue.innerText = dS + amount_left;
//       console.log(index_number);
//     }
//   }
//   window.localStorage.setItem(newName.value, newValue.value);
//   newName.value = "";
//   newValue.value = "";
// }
// function deleteCheck(target, id) {
//   const item = document.getElementById("id" + id);
//   console.log(item);
//   if (target == "newIncome") {
//     income = (parseFloat(income) - parseFloat(total[id])).toFixed(2);
//     amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
//     budgetIncomeValue.innerText = dS + income;
//     budgetValue.innerText = dS + amount_left;
//     item.className = "fall";
//     item.addEventListener("transitionend", function () {
//       item.remove();
//     });
//   } else {
//     expense = (parseFloat(expense) - parseFloat(total[id])).toFixed(2);
//     amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
//     budgetExpenseValue.innerText = dS + expense;
//     budgetValue.innerText = dS + amount_left;
//     item.className = "fall";
//     item.addEventListener("transitionend", function () {
//       item.remove();
//     });
//   }
// }
//////////////////////////////////////////////////////////
// const budgetValue = document.querySelector(".budget-value");
// const budgetIT = document.querySelector(".budget-it");
// const budgetET = document.querySelector(".budget-et");
// const budget = document.querySelector("#budget");
// const budgetIncomeValue = document.querySelector(".budget-income-value");
// const budgetExpenseValue = document.querySelector(".budget-expense-value");
// const newName = document.querySelector("#new-name");
// const newValue = document.querySelector("#new-value");
// const incomeUl = document.querySelector(".income-ul");
// const expenseUl = document.querySelector(".expense-ul");
// const newSelect = document.querySelector("#new-select");
// const addButton = document.querySelector("#add-button");
// const incomeLi = document.querySelector(".income-li");
// const expenseLi = document.querySelector(".expense-li");
// const deleteButton = document.querySelector(".delete-button");
// const newBudget = document.querySelector("#new-budget");
// var total = [];
// var index_number = 0;
// var dS = "R";
// var income = 0;
// var expense = 0;
// var amount_left = 0;
// //Event Listener
// addButton.addEventListener("click", function(){addToList(null);});
// //Functions
// //FUNCTION addToList
// function addToList(selection) {
// event.preventDefault();
// selectOption = document.getElementById("new-select").value;
// if ((selectOption == "new-income" && selection == null) || selection == "newIncome") {
// var income_item = [];
// income_item.push("newIncome");
// income_item.push(newName.value);
// income_item.push(parseFloat(newValue.value).toFixed(2));
// total[index_number] = income_item;
// window.localStorage.setItem("total",JSON.stringify(total));
// const incomeDiv = document.createElement("div");
// incomeDiv.id = "id" + index_number;
// incomeDiv.classList.add("income-div-item");
// const newIncome = document.createElement("li");
// newIncome.innerText =
// newName.value + " " + dS + parseFloat(newValue.value).toFixed(2);
// newIncome.classList.add("income-li");
// incomeDiv.appendChild(newIncome);
// incomeUl.appendChild(incomeDiv);
// const deleteButton = document.createElement("button");
// deleteButton.id = index_number;
// deleteButton.classList.add("delete-button");
// deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
// deleteButton.onclick = function () {
// deleteCheck("newIncome", this.id);
// };
// incomeDiv.appendChild(deleteButton);
// index_number++;
// income = (parseFloat(income) + parseFloat(newValue.value)).toFixed(2);
// amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
// budgetIncomeValue.innerText = dS + income;
// budgetValue.innerText = dS + amount_left;
// newName.value = "";
// newValue.value = "";
// } else {
// if ((selectOption == "new-expense" && selection == null) || selection == "newExpense") {
// var expense_item = [];
// expense_item.push("newExpense");
// expense_item.push(newName.value);
// expense_item.push(parseFloat(newValue.value).toFixed(2));
// total[index_number] = expense_item;
// window.localStorage.setItem("total",JSON.stringify(total));
// //ExpenseDiv
// const expenseDiv = document.createElement("div");
// expenseDiv.id = "id" + index_number;
// expenseDiv.classList.add("expense-div-item");
// const newExpense = document.createElement("li");
// newExpense.innerText =
// newName.value + " " + dS + parseFloat(newValue.value).toFixed(2);
// newExpense.classList.add("expense-li");
// expenseDiv.appendChild(newExpense);
// expenseUl.appendChild(expenseDiv);
// const deleteButton = document.createElement("button");
// deleteButton.id = index_number;
// deleteButton.onclick = function () {
// deleteCheck("newExpense", this.id);
// };
// index_number++;
// deleteButton.classList.add("delete-button");
// deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
// expenseDiv.appendChild(deleteButton);
// expense = (parseFloat(expense) + parseFloat(newValue.value)).toFixed(2);
// amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
// budgetExpenseValue.innerText = dS + expense;
// budgetValue.innerText = dS + amount_left;
// console.log(index_number);
// newName.value = "";
// newValue.value = "";
// }
// }
// }
// function deleteCheck(target, id) {
// const item = document.getElementById("id" + id);
// if (target == "newIncome") {
// income = (parseFloat(income) - parseFloat(total[id][2])).toFixed(2);
// amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
// budgetIncomeValue.innerText = dS + income;
// budgetValue.innerText = dS + amount_left;
// total.splice(id, 1);
// window.localStorage.setItem("total",JSON.stringify(total));
// for(var a=parseInt(id);a<total.length;a++){
// document.getElementById("id" + (a+1)).id = "id" + a;
// document.getElementById((a+1)).id = a;
// };
// item.className = "fall";
// item.addEventListener("transitionend", function () {
// item.remove();
// });
// } else {
// expense = (parseFloat(expense) - parseFloat(total[id][2])).toFixed(2);
// amount_left = (parseFloat(income) - parseFloat(expense)).toFixed(2);
// budgetExpenseValue.innerText = dS + expense;
// budgetValue.innerText = dS + amount_left;
// total.splice(id, 1);
// window.localStorage.setItem("total",JSON.stringify(total));
// for(var a=parseInt(id);a<total.length;a++){
// document.getElementById("id" + (a+1)).id = "id" + a;
// document.getElementById((a+1)).id = a;
// };
// item.className = "fall";
// item.addEventListener("transitionend", function () {
// item.remove();
// });
// }
// }
// window.onload = function(){
// var localstorageitem = window.localStorage.getItem("total");
// if(localstorageitem != null){
// total = JSON.parse(localstorageitem);
// for(var a=0;a<total.length;a++){
// index_number = a;
// newName.value = total[a][1];
// newValue.value = parseFloat(total[a][2]);
// addToList(total[a][0]);
// };
// index_number = total.length;
// console.log(total.toString());
// };
// };
// //window.localStorage.clear();

//////////////////////////////////////////////////////////////////////



// window.localStorage.clear();