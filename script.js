const earningsInput = document.querySelector("#earnings"); //input of earning value
const earningsButton = document.querySelector("#earnings-button"); //the button that is clicked
let incomeTotal = 0
const ExpensesInput = document.querySelector("#expenses")
const expensesButton = document.querySelector ("#expenses-button")
let expenseTotal = 0

const remainingBalanceElement = document.querySelector("#remaining-balance"); // Element to display the remaining balance
 
//EARNINGS:

//need to add an event listener for when the earning button is clicked
earningsButton.addEventListener("click",function(event){
    event.preventDefault();
    incomeTotal += parseFloat(earningsInput.value)
console.log("income total = "+incomeTotal)
updateRemainingBalance(); // Update the balance after modifying income

})

//EXPENSE:

//need to add an event listener and consol log for when the expense button is clicked
expensesButton.addEventListener("click",function(event){
    event.preventDefault();
    expenseTotal += parseFloat(ExpensesInput.value)
console.log("expense total = "+expenseTotal)
updateRemainingBalance(); // Update the balance after modifying expenses

})

//DISPLAY
// Update the remaining balance whenever earnings or expenses change. id="remaining-balance" in the HTML
function updateRemainingBalance() {
    const remainingBalance = incomeTotal - expenseTotal;
    remainingBalanceElement.textContent = `Remaining Balance: $${remainingBalance.toFixed(2)}`;
    console.log("Remaining Balance = $" + remainingBalance.toFixed(2)); // Log the remaining balance
}