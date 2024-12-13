const earningsInput = document.querySelector("#earnings");
const earningsButton = document.querySelector("#earnings-button"); 
const expensesInput = document.querySelector("#expenses");
const expensesButton = document.querySelector("#expenses-button");

let incomeTotal = 0;
let expenseTotal = 0;
let expenseCount = 0;
const maxExpenses = 5;

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// Load initial data from localStorage
function loadInitialData() {
    incomeTotal = getFromLocalStorage('incomeTotal') || 0;
    expenseTotal = getFromLocalStorage('expenseTotal') || 0;
    expenseCount = getFromLocalStorage('expenseCount') || 0;
    console.log("Loaded data: incomeTotal =", incomeTotal, "expenseTotal =", expenseTotal, "expenseCount =", expenseCount);
}

// Validate input
function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

earningsButton.addEventListener("click", function(event) {
    event.preventDefault();
    const earningsValue = earningsInput.value;
    if (isValidNumber(earningsValue)) {
        incomeTotal += parseFloat(earningsValue);
        saveToLocalStorage('incomeTotal', incomeTotal);
        console.log("income total =", incomeTotal);
    } else {
        console.log("Invalid earnings input");
    }
});

expensesButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (expenseCount >= maxExpenses) {
        console.log("Maximum number of expense entries reached");
        return;
    }
    const expensesValue = expensesInput.value;
    if (isValidNumber(expensesValue)) {
        expenseTotal += parseFloat(expensesValue);
        expenseCount++;
        saveToLocalStorage('expenseTotal', expenseTotal);
        saveToLocalStorage('expenseCount', expenseCount);
        console.log("expense total =", expenseTotal);
    } else {
        console.log("Invalid expenses input");
    }
});

// Load initial data on page load
loadInitialData();