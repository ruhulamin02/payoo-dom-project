

// Show "Add Money" by default on page load
document.getElementById("add-money").style.display = "block";


document.getElementById("add-money-box").addEventListener("click", function () {

    handleToggle("add-money", "block");
    handleToggle("cashout-money", "none");
    handleToggle("transaction-history", "block")


});

document.getElementById("cashout-money-box").addEventListener("click", function () {
    handleToggle("add-money", "none");
    handleToggle("cashout-money", "block");
    handleToggle("transaction-history", "block")
});

document.getElementById("transaction-box").addEventListener("click", function (event){
    event.preventDefault();
    handleToggle("add-money","none");
    handleToggle("cashout-money", "none");
    handleToggle("transaction-history", "block")
    
})
