const earningsInput = document.querySelector("#earnings"); //input of earning value
const earningsButton = document.querySelector("#earnings-button"); //the button that is clicked
const earningsOutput =  document.querySelector("earnings-output"); //output for total earnings
let incomeTotal = 0

const ExpensesInput = document.querySelector("#expenses") //input of expenses value
const expensesButton = document.querySelector ("#expenses-button") //the button that is clicked 
const expensesOutput = document.querySelector("#expenses-output"); //output for total expenses
let expenseTotal = 0

//need to add an event listener for when the earning button is clicked
earningsButton.addEventListener("click", function (event) {
    event.preventDefault();
    const earningsValue = parseFloat(earningsInput.value);
    if (!isNaN(earningsValue)) {
        incomeTotal += earningsValue;
        earningsOutput.value = `Total Earnings: $${incomeTotal.toFixed(2)}`; // Updates the output 
        earningsInput.value = ""; // Clear input field
    } else {
        alert("Please enter a valid number for earnings."); // just incase 
    }
console.log("income total = "+incomeTotal)
})

//need to add an event listener and consol log for when the expense button is clicked
expensesButton.addEventListener("click", function (event){
    event.preventDefault();
    const expensesValue = parseFloat(ExpensesInput.value);
    if (!isNaN(expensesValue)) {
        expenseTotal += expensesValue
        expensesOutput.value = `Total Expenses: $${expenseTotal.toFixed(2)}`; //updates the output
        expensesInput.value = ""; // clears input field
    } else {
        alert("Please enter a valid number for expenses."); 
    }
    
console.log("expense total = "+expenseTotal)
})