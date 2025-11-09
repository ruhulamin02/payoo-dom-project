document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const cashoutAmount = getInputValueById("cashout-amount");
    const pin = getInputValueById("cashout-pin");
    const agentNumber = getInputValueById("agent-number");
    const mainBalance = getInnertextById("main-balance");

    // 1️⃣ Validate amount
    if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // 2️⃣ Check PIN
    if (pin === 1234) {
        // 3️⃣ Check if balance is sufficient
        if (cashoutAmount <= mainBalance) {
            const newBalance = mainBalance - cashoutAmount;
            setInnertextById("main-balance", newBalance);
            alert("Money withdrawn successfully!");

            // ✅ Transaction log
            const transactionContainer = document.getElementById("transaction-container");



            // Create new transaction card
            const transactionCard = document.createElement("div");
            transactionCard.className =
                "flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition";

            const date = new Date().toLocaleString();

            transactionCard.innerHTML = `
        <div>
          <p class="text-red-600 font-medium">- ${cashoutAmount} BDT</p>
          <p class="text-sm text-gray-500">Agent: ${agentNumber}</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500">${date}</p>
          <p class="text-sm text-gray-700 font-semibold">New: ${newBalance} BDT</p>
        </div>
      `;

            // Add new transaction at top (latest first)
            transactionContainer.prepend(transactionCard);
        } else {
            alert("❌ Insufficient balance.");
        }
    } else {
        alert("Invalid PIN. Please try again.");
    }
});
