function SumarNumeros () {
    let valorIngresado = document.getElementById("NumeroP").value
    let resultado = 0 
    for (let suma = 0; suma <= valorIngresado; suma++) {
        resultado = suma + resultado
        console.log(resultado)
    }
    document.getElementById("resultado").innerHTML = resultado
}




function Dividirnumeros () {
    let valoringresado = document.getElementById("parOimpar").value
    if(valoringresado % 2 == 0){
        let ptHTML = document.getElementById("calculo")
        ptHTML.innerHTML = "la respuesta es " + valoringresado + " par"

    }else {
        let ptHTML = document.getElementById("calculo")
        ptHTML.innerHTML = "la respuesta es " + valoringresado + " inpar"
    }
}




function pizzeriaPepitos() {
    debugger
    let generos = document.getElementById("generoUsiario").value
    let edad= document.getElementById ("edadUsuario").value
    let reclamar = document.getElementById("reclamarUsuario")
    if (edad <= 10) {
        reclamar.value = " " + "reclamar un jugo"
    } else if (edad >= 18) {
        reclamar.value = " " + "reclamar una cerveza"
    } else if (edad >= 18 && edad <= 18) {
        alert("no recibes ningun premio")
    }
    let reclamarOPCION2 = document.getElementById("reclamarOPCION2")
    if (generos == "hombres") {
        reclamarOPCION2.innerHTML = " una porcion de pizza tres carnes"
    } else if (generos == "mujer") {
        reclamarOPCION2.innerHTML = "una porcion de pizza hawaiana"
    }
}  




function multiplicar() {
    let numero1 = document.getElementById('PrimerNumero').value;
    let numero2 = document.getElementById('SegundoNumero').value

    let producto = numero1 * numero2;

    document.getElementById('Resultado').innerText = producto
}