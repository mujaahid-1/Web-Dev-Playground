const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-char");
const remainingCounterEl = document.getElementById("remaining-char");
const MAX_LENGTH = parseInt(textareaEl.getAttribute("maxlength"));

const updateCounter = () => {
  let totalCounter = textareaEl.value.length;
  let remaining = MAX_LENGTH - totalCounter;
  // console.log(totalCounter);
  totalCounterEl.innerHTML = totalCounter;
  remainingCounterEl.innerHTML = remaining;
  updateColors(remaining);
};

function updateColors(remaining) {
  remainingCounterEl.classList.remove("warning", "danger");
  if (remaining <= 10) {
    remainingCounterEl.classList.add("danger");
  } else if (remaining <= 20) {
    remainingCounterEl.classList.add("warning");
  }
}

textareaEl.addEventListener("input", () => {
  updateCounter();
});

updateCounter();
