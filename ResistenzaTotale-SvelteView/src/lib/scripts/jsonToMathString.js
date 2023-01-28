export default getFormulaResistenzaTotale;

function parenthesize(value) {
  return `(${value})`;
}

function getFormulaResistenzaTotale(resistenzeArray) {
  if (typeof resistenzeArray === "number") {
    return resistenzeArray.toString();
  }

  if (resistenzeArray.isParallelo) {
    return (
      "1/" +
      parenthesize(
        resistenzeArray.values
          .map((resistenza) => {
            if (typeof resistenza === "number") {
              return `1/${resistenza}`;
            } else {
              return `1/${getFormulaResistenzaTotale(resistenza)}`;
            }
          })
          .join("+"),
      )
    );
  }

  return parenthesize(
    resistenzeArray.values.map(getFormulaResistenzaTotale).join("+"),
  );
}
