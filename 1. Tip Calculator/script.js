const calBtn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

const calculateTotal = () => {
  const bill = +billInput.value;
  const tip = +tipInput.value;
  const totalValue = bill * (1 + tip / 100);

  totalSpan.innerText = totalValue.toFixed(2);

  setTimeout(() => {
    billInput.value = "";
    tipInput.value = "";
    totalSpan.innerText = ""; 
  }, 3000);
};

calBtn.addEventListener("click", calculateTotal);
