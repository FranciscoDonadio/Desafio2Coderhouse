//Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.
//Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
//Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
//Invocar la función con los casos de prueba.

const mostrarLista = (arreglo) => {
    
    if(arreglo.length === 0){
        console.log('lista vacia')
        return arreglo.length
    }

    for(let i = 0; i< arreglo.length; i++){
        console.log(arreglo[i])
    }
return arreglo.length
}
//mostrarLista([1,2,3,4])
console.log(`el largo de la lista es ${mostrarLista([1,2,3,4])}`)