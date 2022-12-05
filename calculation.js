const depositeBtn = document.getElementById("deposite-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
// total balance
const totalBalance = document.getElementById("total-blance");

function getValue(balance, inputBalance) {
  const blanceId = document.getElementById(balance);
  const inputId = document.getElementById(inputBalance);

  const totalValue = parseFloat(inputId.value) + parseFloat(blanceId.innerText);
  return totalValue;
}

function updateTotalBalance(balance) {
  const totalBalance = document.getElementById("total-blance");
  const inputId = document.getElementById(balance);

  if (balance === "deposite-input") {
    totalBalance.innerText =
      parseFloat(totalBalance.innerText) + parseFloat(inputId.value);
  } else {
    totalBalance.innerText =
      parseFloat(totalBalance.innerText) - parseFloat(inputId.value);
  }
  inputId.value = "";
}

depositeBtn.addEventListener("click", function () {
  const depositeBlance = document.getElementById("deposite-blance");
  //   update value
  depositeBlance.innerText = getValue("deposite-blance", "deposite-input");
  //   calculate total value
  updateTotalBalance("deposite-input");
});

withdrawBtn.addEventListener("click", function () {
  const withdrawBlance = document.getElementById("withdraw-blance");
  const totalBalance = document.getElementById("total-blance");
  const inputId = document.getElementById("withdraw-input");
  //   update value
  if (parseFloat(totalBalance.innerText) <= 500) {
    return alert("No");
  }
  withdrawBlance.innerText = getValue("withdraw-blance", "withdraw-input");
  //   calculate total value
  updateTotalBalance("withdraw-input");
});
