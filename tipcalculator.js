let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

function calculateTip() {
  if (billAmountElement.value === "") {
    errorMessageElement.textContent = "Please Enter a valid input";
  } else if (percentageTipElement.value === "") {
    errorMessageElement.textContent = "Please Enter a valid input";
  } else {
    errorMessageElement.textContent = "";
    tipAmountElement.value =
      parseInt(billAmountElement.value) *
      (parseInt(percentageTipElement.value) / 100);
    totalAmountElement.value =
      parseInt(billAmountElement.value) + parseInt(tipAmountElement.value);
  }
}
