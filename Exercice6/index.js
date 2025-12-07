const displayInput = document.getElementById("display");

const appendToDisplay = (value) => {
  displayInput.value += value;
};

const clearDisplay = () => {
  displayInput.value = "";
};

const calculateResult = () => {
  if (displayInput.value.includes("/0"))
    return (displayInput.value = "Division by zero is not allowed");
  displayInput.value = eval(displayInput.value);
};
