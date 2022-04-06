const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let regexAsunto = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
    let regexMensaje = /^[a-zA-ZÀ-ÿ\s]{1,1000}$/;
    parrafo.innerHTML = "";

    if(!regexNombre.test(nombre.value)){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += `El Correo no es valido <br>`
        entrar = true
    }

    if(!regexAsunto.test(asunto.value)){
        warnings += `El asunto no es valido <br>`
        entrar = true
    }

    if(!regexMensaje.test(mensaje.value)){
        warnings += `El mensaje no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Mensaje enviado con exito"
    }
});