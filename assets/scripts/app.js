const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  oprationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: oprationNumber,
    result: newResult
  };

  logEntries.push(logEntry);
  console.log(logEntry);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBSTRACT") {
    mathOperator = "-";
    currentResult -= enteredNumber;
  } else if (calculationType === "MULTIPLY") {
    mathOperator = "*";
    currentResult *= enteredNumber;
  } else if (calculationType === "DIVIDE") {
    mathOperator = "/";
    currentResult /= enteredNumber;
  }

  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function substract() {
  calculateResult("SUBSTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
