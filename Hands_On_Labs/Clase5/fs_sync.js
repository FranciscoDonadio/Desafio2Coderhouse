const fs = require('fs')

let nombre = 'Fran'
fs.writeFileSync("./texto.txt",`Buenas noches ${nombre}`,`utf-8`)

if(fs.existsSync('./texto.txt')){
    let texto = fs.readFileSync('./texto.txt', 'utf-8')
    console.log(texto)

    fs.appendFileSync('./texto.txt', '\nBuenos dias')

    texto = fs.readFileSync('./texto.txt', 'utf-8')
    console.log(texto)
}