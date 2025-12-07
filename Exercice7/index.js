const p = document.getElementById("binaryResult");
const convertToBinary = () => {
  p.textContent = "";
  const number = Number(document.getElementById("decimalInput").value);
  if (number === 0) return (p.textContent = "0");
  let binary = "";
  let rest = number;
  while (rest > 0) {
    binary += rest % 2;
    rest = Math.floor(rest / 2);
  }
  const result = binary.split("").reverse().join("");
  p.textContent = result;
  return;
};
