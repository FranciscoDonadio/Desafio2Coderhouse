// Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
// Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
// Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
// Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
// Realizar prueba de individualidad entre las instancias.

class Contador {
    constructor(nombre){
        this.nombre = nombre
        this.contador = 0

    }
 static contadorGlobal = 0
 getResponsable(){
    return `el responsable del contador es ${this.nombre}`
 }
contar = () => {
    this.contador += 1
    Contador.contadorGlobal += 1
}
getCuentaIndividual(){
    return `cuenta individual de ${this.nombre}: ${this.contador}`
}
getCuentaGlobal(){
return `Cuenta global ${Contador.contadorGlobal}`

}

}
const contador1 = new Contador ("Agustin")
const contador2 = new Contador ("Carlos")
const contador3 = new Contador ("Osvaldo")

console.log(contador1.getResponsable())
console.log(contador3.getResponsable())

contador2.contar()

console.log(contador1)
