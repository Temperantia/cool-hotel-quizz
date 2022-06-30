const toDivideBy = { 2: "candy", 11: "bar", 22: "candybar" };

const candyPrint = (number: number) => {
  let found = false;
  for (const [divider, label] of Object.entries(toDivideBy)) {
    if (number % parseInt(divider) === 0) {
      console.info(label);
      found = true;
    }
  }
  if (!found) {
    console.info(number);
  }
};
