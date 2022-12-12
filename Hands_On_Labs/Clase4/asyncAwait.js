const dividir = (num1, num2) => {
  return new Promise((resuelto, rechazado) => {
    if (num2 === 0) {
      rechazado("no se puede dividir por 0");
    } else {
      resuelto(num1 / num2);
    }
  });
};

const calculadora = async (num1, num2) => {
  try {
    let resultado = await dividir(num1, num2);
    console.log(resultado);
  } catch(error) {
    console.log("no se pido dividir", error);
  }
};

calculadora(2, 3);
calculadora(2, 0);
