const sumar = (num1, num2) => {
    return new Promise((resuelto, rechazado) => {
      if (num1 <= 0|| num2 <= 0) {
        rechazado("Operacion innecesaria");
      } else {
        resuelto(num1 + num2);
      }
    });
  };

  const restar = (num1, num2) => {
    return new Promise((resuelto, rechazado) => {
      if (num1 <= 0|| num2 <= 0) {
        rechazado("Operacion invalida");
      } else {
        resuelto(num1 - num2);
      }
    });
  };

const multiplicar = (num1, num2) => {
    return new Promise((resuelto, rechazado) => {
      if (num1 < 0 || num2 <0) {
        rechazado("Esta calculadora solo devuelve numeros positivos");
      } else {
        resuelto(num1 * num2);
      }
    });
  };

const dividir = (num1, num2) => {
    return new Promise((resuelto, rechazado) => {
      if (num2 === 0) {
        rechazado("no se puede dividir por 0");
      } else {
        resuelto(num1 / num2);
      }
    });
  };

  const calculadora = async(num1,num2) => {
    try{
        let suma = await sumar(num1,num2)
        console.log(suma)

        let resta = await restar(num1,num2)
        console.log(resta)

        let multiplicacion = await multiplicar(num1,num2)
        console.log(multiplicacion)

        let division = await dividir(num1,num2)
        console.log(division)

    }catch(error){
        console.log("no se pudo calcular",error)
    }
  }

  //Pruebas
  calculadora(2,3)
  //calculadora(0,1)