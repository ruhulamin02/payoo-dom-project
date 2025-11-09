document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();



    const accountNumber = getInputValueById("account-number");
    const addAmount = getInputValueById("add-amount");
    const pin = getInputValueById("pin");

    // Fix: get balance text instead of value
    const mainBalance = getInnertextById("main-balance");


    if (isNaN(addAmount) || addAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (pin === 1234) {
        const newBalance = mainBalance + addAmount;
        setInnertextById("main-balance", newBalance);
        alert("Money added successfully!");
        

        // Create a new transaction entry
        const transactionContainer = document.getElementById("transaction-container");

        // Remove placeholder text if it exists
        if (transactionContainer.children.length === 1 && transactionContainer.children[0].tagName === "P") {
            transactionContainer.innerHTML = "";
        }

        const transactionCard = document.createElement("div");
        transactionCard.className = "flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition";

        // Date & time
        const date = new Date().toLocaleString();

        // Transaction details
        transactionCard.innerHTML = `
  <div>
    <p class="text-gray-800 font-medium">+ ${addAmount} BDT</p>
    <p class="text-sm text-gray-500">Account: ${accountNumber}</p>
  </div>
  <div class="text-right">
    <p class="text-sm text-gray-500">${date}</p>
    <p class="text-sm text-green-600 font-semibold">New: ${newBalance} BDT</p>
  </div>
`;

        // Add new transaction at top (latest first)
        transactionContainer.prepend(transactionCard);




    } else {
        alert("Invalid PIN. Please try again.");
    }
});
