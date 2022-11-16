const buttons = document.querySelectorAll(".btn");
const currentInput = document.querySelector(".SolutionText");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function handleButtonPress(e) {
  var key = e.target.innerHTML;
  var currentNumber = currentInput.innerHTML;
  if ((Number(key) || key === "0") && currentInput.innerHTML.length < 6) {
    if (currentNumber.startsWith("0")) {
      currentInput.innerHTML = currentNumber.substring(1);
    }
    currentInput.innerHTML += key;
  } else if (key === "AC") {
    currentInput.innerHTML = "0";
    firstNumber = 0;
    secondNumber = 0;
  } else if (
    key === "-" ||
    key === "+" ||
    key === "/" ||
    key === "X" ||
    key === "="
  ) {
    operate(key);
  } else if (key === "+/-") {
    firstNumber = firstNumber * -1;
    if (currentInput.innerHTML.startsWith("-")) {
      currentInput.innerHTML = currentInput.innerHTML.substring(1);
    } else {
      currentInput.innerHTML = "-" + currentInput.innerHTML;
    }
  } else if (key === "%") {
    currentInput.innerHTML = Math.abs(Number(currentInput.innerHTML)) / 100;
  } else if (key === ".") {
    currentInput.innerHTML = currentInput.innerHTML + ".";
  }
}

function operate(key) {
  if (key === "=" && firstNumber === 0) return;
  if (firstNumber === 0) {
    firstNumber = Number(currentInput.innerHTML);
    currentInput.innerHTML = "0";
    operator = key;
  } else if (firstNumber !== 0 && key === "=") {
    secondNumber = Number(currentInput.innerHTML);
    let solution = "0";
    console.log(firstNumber);
    console.log(secondNumber);
    switch (operator) {
      case "+":
        solution = (firstNumber + secondNumber).toString();
        break;
      case "-":
        solution = (firstNumber - secondNumber).toString();
        break;
      case "X":
        solution = (firstNumber * secondNumber).toString();
        break;
      case "/":
        solution = (firstNumber / secondNumber).toString();
        break;
      default:
        solution = "0";
    }
    currentInput.innerHTML = (
      Math.round(Number(solution) * 100) / 100
    ).toString();
    firstNumber = Number(currentInput.innerHTML);
    secondNumber = 0;
  } else if (firstNumber !== 0 && key !== "=") {
    currentInput.innerHTML = "0";
    operator = key;
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonPress);
});
