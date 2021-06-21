let submitIncome = document.querySelector(".submitIncome");
let submitOutcome = document.querySelector(".submitOutcome");
let transactionsContainer = document.querySelector(".transactions");
let incomeDisplay = document.querySelector(".income");
let outcomeDisplay = document.querySelector(".outcome");
let textareaIncome = document.getElementById("dataSubmitInc");
let numberIncome = document.getElementById("numberIncome");
let numberOutcome = document.getElementById("numberOutcome");
let textareaOutcome = document.getElementById("dataSubmitOut");

// Adjusts main balance for user
let newBalanceNumber = document.querySelector(".newBalanceNumber");
let userBalance = document.getElementById("main-balance");
var balanceArray = [];
var incomeArray = []; // Used for storage purposes
var outcomeArray = [];
var outcomeStorageArray = []; // Used for storage purposes

const savedBalance = {
  balance: newBalanceNumber.value,
};

function changeUserBalance() {
  balanceArray.splice(0, 1, newBalanceNumber.value);
  balanceArray = balanceArray.map(Number);
  console.log("Balance added: " + balanceArray);
  userBalance.innerHTML = "$ " + balanceArray;
}
console.log(savedBalance.balance);

// INCOME SECTION
submitIncome.addEventListener("click", function () {
  setTimeout(applyIncome, 1900);
});
function applyIncome() {
  let incomeList = document.createElement("li");
  incomeList.innerHTML =
    "INCOME: " + textareaIncome.value + " for " + "$ " + numberIncome.value;
  incomeArray.push(
    "INCOME: " + textareaIncome.value + " for " + "$ " + numberIncome.value
  );
  for (
    let i = 0;
    i < incomeArray.length;
    i++ // Set different income transactions within localStorage
  ) {
    window.localStorage.setItem(`IncomeNumber ${i}`, incomeArray[i]);
  }
  balanceArray.push(numberIncome.value); // Pushing the value of the income number inside the array
  //window.localStorage.setItem('userBalance', (numberIncome.value));
  balanceArray = balanceArray.map(Number); // Converts the balanceArray array items into numbers
  let incomeSummary = balanceArray.reduce((a, b) => a + b, 0); // Does the addition between the userBalance and the income number
  userBalance.innerHTML = "$ " + incomeSummary;
  outcomeArray = outcomeArray.map(Number);
  outcomeArray.splice(0, 1, incomeSummary);
  balanceArray.splice(0, 2, incomeSummary);
  console.log("OutcomeArray: " + outcomeArray);
  console.log("BalanceArray: " + balanceArray);
  console.log(textareaIncome.value + " for " + numberIncome.value); // Logs the last transaction for income
  //console.log(window.localStorage.getItem(userBalance));
  transactionsContainer.appendChild(incomeList);
}

// OUTCOME SECTION
submitOutcome.addEventListener("click", function () {
  setTimeout(applyOutcome, 1900);
});
function applyOutcome() {
  let outcomeList = document.createElement("li");
  outcomeList.innerHTML =
    "OUTCOME: " + textareaOutcome.value + " for " + "$ " + numberOutcome.value;
  outcomeStorageArray.push(
    "OUTCOME: " + textareaOutcome.value + " for " + "$ " + numberOutcome.value
  );
  for (
    let i = 0;
    i < outcomeStorageArray.length;
    i++ // Set different outcome transactions within localStorage
  ) {
    window.localStorage.setItem(`OutcomeNumber ${i}`, outcomeStorageArray[i]);
  }
  balanceArray.push(numberOutcome.value);
  balanceArray = balanceArray.map(Number);
  const reducer = (accumulator, currentValue) => accumulator - currentValue; // Subtracting each value from the general balance
  let outcomeSummary = balanceArray.reduce(reducer);
  userBalance.innerHTML = "$ " + outcomeSummary;
  outcomeArray = outcomeArray.map(Number);
  outcomeArray.splice(0, 1, outcomeSummary);
  balanceArray.splice(0, 3, outcomeSummary);
  console.log("OutcomeArray: " + outcomeArray.map(Number));
  console.log("BalanceArray: " + balanceArray);
  console.log(textareaOutcome.value + " for " + numberOutcome.value);
  transactionsContainer.appendChild(outcomeList);
  console.log(outcomeArray);
}

// Fetch items from storage

window.onload = function () {
  function allStorage() {
    var archive = [],
      keys = Object.keys(localStorage),
      i = 0,
      key;

    for (; (key = keys[i]); i++) {
      archive.push(localStorage.getItem(key) + "</br>");
    }

    return archive.splice(0, 5, "");
  }
  transactionsContainer.innerHTML = allStorage();
};

// Loader for WC
let anchor = document.getElementById("page-loader");
function loader() {
  setTimeout(function () {
    anchor.style.display = "block";
  }, 0);
  setTimeout(function () {
    anchor.style.display = "none";
  }, 1900);
}
