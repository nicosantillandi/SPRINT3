const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")
const boton = document.getElementById("button")


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
    if(apellido.value.length <3){
        warning += "El Apellido no es válido <br>"
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
    // SI los datos de arriba tiene una estructura correcta, saltará un mensaje 
    // avisando de un registro exitoso y va a aparecer un boton para que vuelva a 
    // la pagina de inicio
    // si, NO se cumple la condicion , van a parecer mensajes para que ingrese bn los datos
    
    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML = "Registro con exito"
        boton.style.display = "block";
    }
})

