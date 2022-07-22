const budgetValue = document.querySelector(".budget-value");
const budgetIT = document.querySelector(".budget-it");
const budgetET = document.querySelector("budget-et");
const budget = document.querySelector("#budget");
const budgetIncomeValue = document.querySelector(".budget-income-value");
const budgetExpenseValue = document.querySelector(".budget-expense-value");
const newName = document.querySelector("#new-name");
const newValue = document.querySelector("#new-value");
const incomeUl = document.querySelector(".income-ul");
const expenseUl = document.querySelector(".expense-ul");
const newSelect = document.querySelector("#new-select");
const addButton = document.querySelector("#add=button");
const incomeLi = document.querySelector(".income-li");
const expenseLi = document.querySelector(".expense-li");
const deleteButton = document.querySelector(".delete-button");
const newBudget = document.querySelector("#new-budget");

var total = [];
var index_number = 0;
var dS = "$";
var income = 0;
var expense = 0;
var amount_left = 0;

addButton.addEventListener("click", function(){addToList(null);});

function addToList(selection) {
  event.preventDefault();
  selectionOption = document.getElementById("new-select").value;
  if ((selectionOption == "new-income" && selection == null) || selection == "newIncome");
}

var income_item = [];
income_item.push("newIncome");
income_item.push(newName.value);
income_item.push(parseFloat(newValue.value).toFixed(2));

