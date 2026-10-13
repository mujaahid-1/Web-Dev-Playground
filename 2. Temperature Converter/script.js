const celsiusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

const computeTemp = (e) => {
  let currentValue = +e.target.value;

  switch (e.target.name) {
    case "celcius":
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      kelvinEl.value = (currentValue + 273.32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
};

celsiusEl.addEventListener("change", computeTemp);
fahrenheitEl.addEventListener("change", computeTemp);
kelvinEl.addEventListener("change", computeTemp);
