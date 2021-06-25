let buttonIncomeToggler = document.querySelector(".buttonIncome");
let buttonOutcomeToggler = document.querySelector(".buttonOutcome");
let incomeContainer = document.querySelector(".containerIncome");
let outcomeContainer = document.querySelector(".containerOutcome");
let showTrans = document.querySelector(".button");
let switchMode = document.querySelector(".switch");
let toggleIncome = document.getElementById("incomeShow");
let toggleOutcome = document.getElementById("outcomeShow");

buttonIncomeToggler.addEventListener("click", function () {
  if (buttonIncomeToggler.checked) {
    incomeContainer.classList.add(".containerIncome");
    incomeContainer.className = "showIncomeOutcome";
  } else {
    incomeContainer.className = "closeForm";
  }
});

buttonOutcomeToggler.addEventListener("click", function () {
  if (buttonOutcomeToggler.checked) {
    outcomeContainer.classList.add(".containerOutcome");
    outcomeContainer.className = "showIncomeOutcome";
  } else {
    outcomeContainer.className = "closeForm";
  }
});
