
const mejoresBandas = ['Bon Jovi', 'Queen', 'KISS']
const mejoresPeliculas = ['Gigantes de acero', 'Top Gun Maverick', 'Cars']

console.log(mejoresBandas)
console.log(mejoresPeliculas)

const listapelis = document.querySelector('#mejorespelis')

alert ('En el siguiente mensaje tienes 2 opciones, responder algo, o no responder nada. Saludos :)')
let cambioH2 = parseInt(prompt('De que quieres que sea la lista del H2?\n 1- Mejores bandas (a opinion del programador) \n2- Mejores peliculas (a opinion del programador)'))

while (cambioH2!=1 && cambioH2!=2) {
    cambioH2 = parseInt(prompt('Elija una opcion correcta\n 1- Mejores bandas (a opinion del programador) \n2- Mejores peliculas (a opinion del programador)'))
}

//Aca se sobreescribe contenido ya existente
if (cambioH2===1) {
    document.querySelector('h2').textContent = 'Mejores Bandas'
    document.querySelector('.espacio1').textContent = mejoresBandas[0] //Aca estoy cambiando mediante su clase
    document.getElementById('li2').textContent = mejoresBandas[1] // Aca mediante su Id
    document.querySelector('#li3').textContent = mejoresBandas[2] // Aca tambien mediante su Id
    
}

//Aca se crea nuevo contenido 
else{
    document.querySelector('h2').textContent = 'Mejores Peliculas'
    mejoresPeliculas.forEach(pelis => {
        listapelis.innerHTML += `<li>${pelis}</li>`
    })
}








