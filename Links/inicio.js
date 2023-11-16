const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")
const boton = document.getElementById("boton")

// Estos valores de abajo permite hacer restricciones de longitud 
// en casillas o ingreso de un estructura de mail para que la persona pueda
// ingresar

form.addEventListener("submit", e=>{
    e.preventDefault()

    let warning = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false
    parrafo.innerHTML=""

    if(nombre.value.length <6){
        warning += "El nombre no es válido <br>"
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warning += "El email no es válido <br>"
        entrar = true
    }
    if(contraseña.value.length <8){
        warning += "La contraseña necesita mínimo 8 caracteres"
        entrar = true
    }
    // En esta sección como resultado me permite validar si las condiciones de arriba
    // se cumplen para que puedar ingresar sus datos bien y redireccionarlo
    //  devuelta a la pagina de inicio.

    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML= "Usuario correcto"
        window.location.href = "https://www.instagram.com/?hl=es-la"
    }
})