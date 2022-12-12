const { errorMonitor } = require("events");
const fs = require("fs");

fs.writeFile("./texto.txt", `Buenas noches`, (error) => {
  if (error) {
    console.log("Error al escribir");
  }

  fs.readFileSync("./texto.txt", (error, resultado) => {
    if (error) {
      console.log("Error al leer");
    }

    console.log(resultado);

    fs.appendFile("./texto.txt", "\n Buenos dias", (error) => {
      if (error)
        console.log("Error al escribir", (error, resultado) => {
          console.log(resultado);
          fs.unlink("./texto.txt", (error) => {
            if (error) console.log("Error al borrar", error);
          });
        });
    });
  });
});
