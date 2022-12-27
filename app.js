const OpcionesCambioAPesos = (opcionDolarPesos) => {
  switch (opcionDolarPesos) {
    case "A":
      let dolarOficial = +prompt("Ingrese el monto");
      oficialToPesos(dolarOficial);
      break;
    case "B":
      let dolarBlue = +prompt("Ingrese el monto");
      blueToPesos(dolarBlue);
      break;
    case "C":
      break;
    default:
      alert("Opción inválida");
      let cambioDolarPesos = prompt(
        "A - Cambio de dólar oficial a pesos argentinos \n B - Cambio de dólar blue a pesos argentinos \n C - Volver a menú inicio"
      ).toUpperCase();
      OpcionesCambioAPesos(cambioDolarPesos);
  }
};

const oficialToPesos = (dolar) => {
  let resultadoCambio = parseInt(dolar * 174);
  alert(
    "el monto aproximado es de " +
      resultadoCambio +
      " peso/s argentinos a cambio dólar oficial  "
  );
};

const blueToPesos = (dolar) => {
  let resultadoCambio = parseInt(dolar * 342);
  alert(
    "el monto aproximado es de " +
      resultadoCambio +
      " peso/s argentinos a cambio dólar blue"
  );
};

const OpcionesCambioADolares = (OpcionPesosDolares) => {
  switch (OpcionPesosDolares) {
    case "A":
      let dolarOficial = +prompt("Ingrese el monto");
      pesosToOficial(dolarOficial);
      break;
    case "B":
      let dolarBlue = +prompt("Ingrese el monto");
      pesosToBlue(dolarBlue);
      break;
    case "C":
      break;
    default:
      alert("Opción inválida");
      let cambioPesosDolar = prompt(
        "A - Cambio de pesos argentinos a dólar oficial \n B - Cambio de de pesos argentinos a dólar blue \n C - Volver a menú inicio"
      ).toUpperCase();
      OpcionesCambioADolares(cambioPesosDolar);
  }
};

const pesosToOficial = (pesos) => {
  let resultadoCambio = parseInt(pesos / 182);
  alert(
    "el monto aproximado es de " +
      resultadoCambio +
      " dólar/es oficial a cambio peso argentino"
  );
};

const pesosToBlue = (pesos) => {
  let resultadoCambio = parseInt(pesos / 346);
  alert(
    "el monto aproximado es de " +
      resultadoCambio +
      " dólar/es blue a cambio peso argentino"
  );
};

const Inicio = () => {
  let menuInicio = +prompt(
    "Bienvenido al conversor de moneda: \n 1 - Cambio de dólares a pesos argentinos \n 2 - Cambio de pesos argentinos a dólares \n 3 - Salir"
  );
  switch (menuInicio) {
    case 1:
      let cambioDolarPesos = prompt(
        "A - Cambio de dólar oficial a pesos argentinos \n B - Cambio de dólar blue a pesos argentinos \n C - Volver a menú inicio"
      ).toUpperCase();
      OpcionesCambioAPesos(cambioDolarPesos);
      break;
    case 2:
      let cambioPesosDolar = prompt(
        "A - Cambio de pesos argentinos a dólar oficial \n B - Cambio de de pesos argentinos a dólar blue \n C - Volver a menú inicio"
      ).toUpperCase();
      OpcionesCambioADolares(cambioPesosDolar);
      break;
    case 3:
      return menuInicio;
    default:
      alert("Opción inválida");
      Inicio();
  }
};

do {
  menuInicio = Inicio();
} while (menuInicio !== 3)