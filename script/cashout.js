document.getElementById("cashout-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const cashoutAmount = parseFloat(document.getElementById("cashout-amount").value);
    const pin = parseInt(document.getElementById("cashout-pin").value);
    const mainBalanceText  = document.getElementById("main-balance").innerText.replace('$', '');
    const mainBalance = parseFloat(mainBalanceText);

    if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (pin === 1234) {
        if (cashoutAmount <= mainBalance) {
            const newBalance = mainBalance - cashoutAmount; 
            document.getElementById("main-balance").innerText = `$${newBalance}`;
            alert("Money withdrawn successfully!");
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Invalid PIN. Please try again.");
    }
});