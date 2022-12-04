const depositeBlance = document.getElementById("deposite-blance");
const depositeInput = document.getElementById("deposite-input");
const depositeBtn = document.getElementById("deposite-btn");

// withdraw variable
const withdrawBlance = document.getElementById("withdraw-blance");
const withdrawInput = document.getElementById("withdraw-input");
const withdrawBtn = document.getElementById("withdraw-btn");
// total balance
const totalBalance = document.getElementById("total-blance");

depositeBtn.addEventListener("click", function () {
  // get input value
  const depositeValue = depositeInput.value;
  //   convert to number
  const updateDeposite = parseFloat(depositeValue);
  const depoValue = parseFloat(depositeBlance.innerText);
  //   update value
  depositeBlance.innerText = updateDeposite + depoValue;
  //   calculate total value
  totalBalance.innerText = parseFloat(totalBalance.innerText) + updateDeposite;

  depositeInput.value = "";
});

withdrawBtn.addEventListener("click", function () {
  // get input value
  const depositeValue = withdrawInput.value;
  //   convert to number
  const updateWithdraw = parseFloat(depositeValue);
  const withdrawValue = parseFloat(withdrawBlance.innerText);
  //   update value
  withdrawBlance.innerText = updateWithdraw + withdrawValue;

  //   calculate total value
  totalBalance.innerText = parseFloat(totalBalance.innerText) - updateWithdraw;

  withdrawInput.value = "";
});
