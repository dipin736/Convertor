const tempInput = document.getElementById("tempInput");
const unitFrom = document.getElementById("unitFrom");
const unitTo = document.getElementById("unitTo");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Enable button only if all fields are filled
function checkFormCompletion() {
    convertBtn.disabled = !(tempInput.value && unitFrom.value && unitTo.value);
}

// Conversion Logic
function convertTemperature() {
    const temperature = parseFloat(tempInput.value);
    const from = unitFrom.value;
    const to = unitTo.value;

    let convertedTemp;

    if (from === to) {
        convertedTemp = temperature;
    } else if (from === "celsius" && to === "fahrenheit") {
        convertedTemp = (temperature * 9/5) + 32;
    } else if (from === "celsius" && to === "kelvin") {
        convertedTemp = temperature + 273.15;
    } else if (from === "fahrenheit" && to === "celsius") {
        convertedTemp = (temperature - 32) * 5/9;
    } else if (from === "fahrenheit" && to === "kelvin") {
        convertedTemp = (temperature - 32) * 5/9 + 273.15;
    } else if (from === "kelvin" && to === "celsius") {
        convertedTemp = temperature - 273.15;
    } else if (from === "kelvin" && to === "fahrenheit") {
        convertedTemp = (temperature - 273.15) * 9/5 + 32;
    }

    result.innerHTML = `
    <span class="result-unit-box">${temperature.toFixed(2)} ${from.charAt(0).toUpperCase() + from.slice(1)}</span>
    is
    <span class="result-unit-box">${convertedTemp.toFixed(2)} ${to.charAt(0).toUpperCase() + to.slice(1)}</span>
`;
}

// Event Listeners
tempInput.addEventListener("input", checkFormCompletion);
unitFrom.addEventListener("change", checkFormCompletion);
unitTo.addEventListener("change", checkFormCompletion);
convertBtn.addEventListener("click", convertTemperature);
