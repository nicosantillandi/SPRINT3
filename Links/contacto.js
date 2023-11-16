const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")
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
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warning += "El email no es válido <br>"
        entrar = true
    }
    if(asunto.value.length <4){
        warning += "El asunto no es válido <br>"
        entrar = true
    }
    if(mensaje.value.length <40){
        warning += "Debes ingresar al menos 40 caracteres mínimo<br>"
        entrar = true
    }
       // SI los datos de arriba tiene una estructura correcta, saltará un mensaje 
    // avisando de un registro exitoso y va a aparecer un boton para que vuelva a 
    // la pagina de inicio
    // si, NO se cumple la condicion , van a parecer mensajes para que ingrese bn los datos
    
    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML= "Formulario enviado"
        boton.style.display = "block";
        
    }
})
