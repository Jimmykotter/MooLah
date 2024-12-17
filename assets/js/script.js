// Select elements for earnings - Jimmy
const earningsInput = document.querySelector("#earnings"); // Input field for earnings value - Jimmy
const earningsButton = document.querySelector("#earnings-button"); // Button to submit earnings - Jimmy
const earningsOutput = document.querySelector("#earnings-output"); // Output for total earnings -yasmine  
let incomeTotal = 0; // Variable to store the total earnings -Jimmy 

// Select elements for expenses - Jimmy
const expensesInput = document.querySelector("#expenses"); // Input field for expenses value - Jimmy
const expensesButton = document.querySelector("#expenses-button"); // Button to submit expenses - Jimmy
const expensesOutput = document.querySelector("#expenses-output"); // Output for total expenses - yasmine
let expenseTotal = 0; // Variable to store the total expenses -Jimmy

// Select element for displaying the remaining balance - Jimmy
const remainingBalanceElement = document.querySelector("#remaining-balance"); // Element to display the remaining balance - Jimmy

// Modal elements
const modal = document.querySelector("#modal"); // Modal container - yasmine 
const openModalButton = document.querySelector("#open-modal-button"); // Button to open the modal -yasmine
const closeModalButton = document.querySelector("#close-modal-button"); // Button to close the modal -yasmine
const modalEarnings = document.querySelector("#modal-earnings"); // Modal display for earnings -yasmine 
const modalExpenses = document.querySelector("#modal-expenses"); // Modal display for expenses -yasmine
const modalBalance = document.querySelector("#modal-balance"); // Modal display for remaining balance -yasmine

// EARNINGS:

earningsButton.addEventListener("click", function (event) {// event listener for when the "submit" earnings button is clicked - Jimmy
    event.preventDefault(); //stop the page from refreshing after submitting - Jimmy
    const earningsValue = parseFloat(earningsInput.value); // Parse input value to a float -yasmine

    if (!isNaN(earningsValue) && earningsValue >= 0) {
        incomeTotal += earningsValue; // Add the earnings to the total -yasmine
        earningsOutput.textContent = `Total Earnings: $${incomeTotal.toFixed(2)}`; // Update the earnings output -yasmine
        earningsInput.value = ""; // Clear the input field after submission -yasmine 
    } else {
        alert("Please enter a valid positive number for earnings."); // Input validation -yasmine
    }

    updateRemainingBalance(); // Update the balance after modifying income - Jimmy
});

// EXPENSES:

expensesButton.addEventListener("click", function (event) { //event listener for when the expenses button is clicked - Jimmy
    event.preventDefault(); //stop the page from refreshing after submitting - Jimmy

    const expensesValue = parseFloat(expensesInput.value); // Parse input value to a float -yasmine 

    if (!isNaN(expensesValue) && expensesValue >= 0) {
        expenseTotal += expensesValue; // Add the expense to the total -yasmine 
        expensesOutput.textContent = `Total Expenses: $${expenseTotal.toFixed(2)}`; // Update the expenses output -yasmine 
        expensesInput.value = ""; // Clear the input field after submission -yasmine 
    } else {
        alert("Please enter a valid positive number for expenses."); // Input validation -yasmine 
    }

    updateRemainingBalance(); // Update the balance after modifying expenses - Jimmy
});

// DISPLAY:

function updateRemainingBalance() { // Update the remaining balance whenever earnings or expenses change - Jimmy
    const remainingBalance = incomeTotal - expenseTotal; // Calculate remaining balance -Jimmy
    remainingBalanceElement.textContent = `Remaining Balance: $${remainingBalance.toFixed(2)}`; // Update display -Jimmy 
    console.log("Remaining Balance = $" + remainingBalance.toFixed(2)); // Log the remaining balance - Jimmy
}

// MODAL:
// Open the modal and display the summary -yasmine
openModalButton.addEventListener("click", function () {
    modalEarnings.textContent = `Total Earnings: $${incomeTotal.toFixed(2)}`;
    modalExpenses.textContent = `Total Expenses: $${expenseTotal.toFixed(2)}`;
    modalBalance.textContent = `Remaining Balance: $${(incomeTotal - expenseTotal).toFixed(2)}`;
    modal.style.display = "block";
});

// Close the modal when the close button is clicked -yasmine
closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when clicking outside the modal content -yasmine
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
