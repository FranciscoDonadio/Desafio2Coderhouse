// # Utilizacion ES6-ES9
// - Dados los objetos indicados en la siguiente diapositiva:
//   - Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
//   - Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

let arrayProductos = objetos.map(prod => Object.keys(prod))
console.log(arrayProductos)
let total = objetos.map(value => Object.values(value))
//el flat en caso de que haya mas de un array como es este el caso lo que hace es juntarlo en un array
total = total.flat()
total = total.reduce((valS,ValA) => valS + ValA)
console.log(total)

// const objetos = [
//     {
//       manzanas: 3,
//       peras: 2,
//       carne: 1,
//       jugos: 5,
//       dulces: 2,
//     },
//     {
//       manzanas: 1,
//       sandias: 1,
//       huevos: 6,
//       jugos: 1,
//       panes: 4,
//     },
//   ]
  
//   const onlykeys = objetos.map((prod) => Object.keys(prod))
//   console.log(onlykeys)
//   const onlyValues = objetos.map((prod) => Object.values(prod))
//   console.log(onlyValues)
  
//   const totalValues = []
//   const oneArray = onlyValues.map((val) =>
//     val.forEach((element) => totalValues.push(element))
//   )
//   console.log(totalValues)
  
//   console.log({ total: totalValues.reduce((acc, val) => acc + val) })