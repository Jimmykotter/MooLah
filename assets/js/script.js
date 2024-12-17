// Select elements for earnings - Jimmy
const earningsInput = document.querySelector("#earnings"); // Input field for earnings value - Jimmy
const earningsButton = document.querySelector("#earnings-button"); // Button to submit earnings - Jimmy
const earningsOutput = document.querySelector("#earnings-output"); // Output for total earnings - Yasmine
let incomeTotal = 0; // Variable to store the total earnings - Jimmy

// Select elements for expenses - Jimmy
const expensesInput = document.querySelector("#expenses"); // Input field for expenses value - Jimmy
const expensesButton = document.querySelector("#expenses-button"); // Button to submit expenses - Jimmy
const expensesOutput = document.querySelector("#expenses-output"); // Output for total expenses - Yasmine
let expenseTotal = 0; // Variable to store the total expenses - Jimmy

// Select element for displaying the remaining balance - Jimmy
const remainingBalanceElement = document.querySelector("#remaining-balance"); // Element to display the remaining balance - Jimmy

// Modal elements for transaction history - Yasmine
const historyModal = document.querySelector("#history-modal");
const openHistoryButton = document.querySelector("#open-history-button");
const closeHistoryButton = document.querySelector("#close-history-button");
const transactionList = document.querySelector("#transaction-list");

// Array to store transactions - Yasmine
let transactions = [];

// Function to add a transaction to the history - Yasmine
function addTransaction(type, amount) {
    transactions.push({ type, amount });
}

// Event listener for earnings submission - Jimmy
earningsButton.addEventListener("click", function (event) {
    event.preventDefault(); // Stop the page from refreshing - Jimmy
    const earningsValue = parseFloat(earningsInput.value.trim()); // Trim to remove whitespace - Yasmine

    if (!isNaN(earningsValue) && earningsValue >= 0) {
        incomeTotal += earningsValue; // Add the earnings to the total - Yasmine
        earningsOutput.textContent = `Total Earnings: $${incomeTotal.toFixed(2)}`; // Update the earnings output - Yasmine
        addTransaction("Earnings", earningsValue); // Add transaction to history - Yasmine
        earningsInput.value = ""; // Clear the input field - Yasmine
    } else {
        alert("Please enter a valid positive number for earnings."); // Input validation - Yasmine
    }

    updateRemainingBalance(); // Update the balance - Jimmy
});

// Event listener for expenses submission - Jimmy
expensesButton.addEventListener("click", function (event) {
    event.preventDefault(); // Stop the page from refreshing - Jimmy
    const expensesValue = parseFloat(expensesInput.value.trim()); // Trim to remove whitespace - Yasmine

    if (!isNaN(expensesValue) && expensesValue >= 0) {
        expenseTotal += expensesValue; // Add the expense to the total - Yasmine
        expensesOutput.textContent = `Total Expenses: $${expenseTotal.toFixed(2)}`; // Update the expenses output - Yasmine
        addTransaction("Expenses", expensesValue); // Add transaction to history - Yasmine
        expensesInput.value = ""; // Clear the input field - Yasmine
    } else {
        alert("Please enter a valid positive number for expenses."); // Input validation - Yasmine
    }

    updateRemainingBalance(); // Update the balance - Jimmy
});

// Function to update the remaining balance - Jimmy
function updateRemainingBalance() {
    const remainingBalance = incomeTotal - expenseTotal; // Calculate remaining balance - Jimmy
    remainingBalanceElement.textContent = `Remaining Balance: $${remainingBalance.toFixed(2)}`; // Update display - Jimmy
    console.log("Remaining Balance = $" + remainingBalance.toFixed(2)); // Log the remaining balance - Jimmy
}

// Function to render transaction history - Yasmine
function renderTransactionHistory() {
    transactionList.innerHTML = ""; // Clear the list before re-rendering - Yasmine

    if (transactions.length === 0) {
        transactionList.innerHTML = "<li>No transactions recorded yet.</li>"; // Display message if no transactions - Yasmine
    } else {
        transactions.forEach((transaction, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${transaction.type}: $${transaction.amount.toFixed(2)}`; // Format transaction - Yasmine
            transactionList.appendChild(listItem); // Append transaction to the list - Yasmine
        });
    }
}

// Open the transaction history modal - Yasmine
openHistoryButton.addEventListener("click", function () {
    renderTransactionHistory(); // Render the transaction history - Yasmine
    historyModal.style.display = "block"; // Display the modal - Yasmine
});

// Close the transaction history modal when the close button is clicked - Yasmine
closeHistoryButton.addEventListener("click", function () {
    historyModal.style.display = "none"; // Hide the modal - Yasmine
});

// Close the modal when clicking outside the modal content - Yasmine
window.addEventListener("click", function (event) {
    if (event.target === historyModal) {
        historyModal.style.display = "none"; // Hide the modal - Yasmine
    }
});

// Close the modal when the 'Escape' key is pressed - Yasmine
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        historyModal.style.display = "none";
    }
});




