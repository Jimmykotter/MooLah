const earningsInput = document.querySelector("#earnings"); //input of earning value
const earningsButton = document.querySelector("#earnings-button"); //the button that is clicked
let incomeTotal = 0
const ExpensesInput = document.querySelector("#expenses")
const expensesButton = document.querySelector ("#expenses-button")
let expenseTotal = 0

//need to add an event listener for when the earning button is clicked
earningsButton.addEventListener("click",function(event){
    event.preventDefault();
    incomeTotal += parseFloat(earningsInput.value)
console.log("income total = "+incomeTotal)
})

//need to add an event listener and consol log for when the expense button is clicked
expensesButton.addEventListener("click",function(event){
    event.preventDefault();
    expenseTotal += parseFloat(ExpensesInput.value)
console.log("expense total = "+expenseTotal)
})