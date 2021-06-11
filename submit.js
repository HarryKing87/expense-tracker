let submitIncome = document.querySelector('.submitIncome');
let submitOutcome = document.querySelector('.submitOutcome');
let transactionsContainer = document.querySelector('.transactions');
let incomeDisplay = document.querySelector('.income');
let outcomeDisplay = document.querySelector('.outcome');
let textareaIncome = document.getElementById('dataSubmitInc');
let numberIncome = document.getElementById('numberIncome');
let numberOutcome = document.getElementById('numberOutcome');
let textareaOutcome = document.getElementById('dataSubmitOut');

// Adjusts main balance for user
let newBalanceNumber = document.querySelector('.newBalanceNumber');
let userBalance = document.getElementById('main-balance');
var balanceArray = [];
var incomeArray = []; // May not be helpful
var outcomeArray = [];
//balanceArray.push(window.localStorage.getItem('userBalance'));
//userBalance.innerHTML = "$ "  + window.localStorage.getItem('userBalance');

function changeUserBalance() {
          balanceArray.splice(0,1,newBalanceNumber.value);
          /*balanceArray.push(newBalanceNumber.value);*/
          balanceArray = balanceArray.map(Number);
          console.log("Balance added: " + balanceArray);
          userBalance.innerHTML = "$ " + newBalanceNumber.value;
          //window.localStorage.setItem('userBalance', (newBalanceNumber.value));  
}

submitIncome.addEventListener('click', function() {
          let incomeList = document.createElement('li');
          incomeList.innerHTML = "INCOME: " + textareaIncome.value + " for " + numberIncome.value;  
          balanceArray.push(numberIncome.value);
          //window.localStorage.setItem('userBalance', (numberIncome.value));
          balanceArray = balanceArray.map(Number);
          let incomeSummary = balanceArray.reduce((a,b) => a + b, 0);
          userBalance.innerHTML = "$ " + incomeSummary;
          outcomeArray = outcomeArray.map(Number);
          outcomeArray.splice(0,1,incomeSummary);
          balanceArray.splice(0,2,incomeSummary);
          console.log("OutcomeArray: " + outcomeArray);
          console.log("BalanceArray: " + balanceArray);
          console.log(textareaIncome.value + " for " + numberIncome.value); // Logs the last transaction for income
          //console.log(window.localStorage.getItem(userBalance));
          transactionsContainer.appendChild(incomeList);
});

submitOutcome.addEventListener('click', function() {
          let outcomeList = document.createElement('li');
          outcomeList.innerHTML = "OUTCOME: " + textareaOutcome.value + " for " + numberOutcome.value;
          balanceArray.push(numberOutcome.value);
          window.localStorage.setItem('userBalance', (numberOutcome.value));
          balanceArray = balanceArray.map(Number);
          const reducer = (accumulator, currentValue) => accumulator - currentValue; // Subtracting each value from the general balance
          let outcomeSummary = balanceArray.reduce(reducer);
          userBalance.innerHTML = "$ " + outcomeSummary;
          outcomeArray = outcomeArray.map(Number);
          outcomeArray.splice(0,1,outcomeSummary);
          balanceArray.splice(0,3,outcomeSummary);
          console.log("OutcomeArray: " + outcomeArray);
          console.log("BalanceArray: " + balanceArray);
          console.log(textareaIncome.value + " for " + numberOutcome.value);
          transactionsContainer.appendChild(outcomeList);
});

// Fetch items from storage









