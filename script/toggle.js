document.getElementById("add-money").style.display = "block";// Show add money section by default
document.getElementById("add-money-box").addEventListener("click", function() {
    document.getElementById("cashout-money").style.display = "none";
    document.getElementById("add-money").style.display = "block";
});

document.getElementById("cashout-money-box").addEventListener("click", function() {
    document.getElementById("add-money").style.display = "none";
    document.getElementById("cashout-money").style.display = "block";
});
