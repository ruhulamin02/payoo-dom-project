document.getElementById("add-money-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseFloat(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("pin").value);
    
    // Remove the "$" sign and parse balance correctly
    const mainBalanceText = document.getElementById("main-balance").innerText.replace('$', '');
    const mainBalance = parseFloat(mainBalanceText);

    if (isNaN(addAmount) || addAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (pin === 1234) {
        const newBalance = mainBalance + addAmount;
        document.getElementById("main-balance").innerText = `$${newBalance}`;
        alert("Money added successfully!");
    } else {
        alert("Invalid PIN. Please try again.");
    }
});
