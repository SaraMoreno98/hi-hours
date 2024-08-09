const saludoTxt = document.getElementById('saludo')
const nameInputContainer = document.getElementById('name-input-container')
const nameInput = document.getElementById ('name-input')
const submitButton = document.getElementById('submit-name')

// GUARDAR NOMBRE EN EL LOCAL STORAGE
function guardarNombre () {
    // LEO LO QUE HAY EN EL INPUT Y LO GUARDO EN NAME
    const name = nameInput.value.trim()
    if (name.length > 1){
        // CREA UN ITEM CON UN VALOR DE CLAVE Y UN NOMBRE DE USER
        localStorage.setItem('nombreUsuario', name)
        mostrarNombre(name)
    }
}

function mostrarNombre (name){
    nameInputContainer.style.display = 'none'
    const hora = new Date().getHours()
    //const hora = 20
    parseInt(hora)
        console.log(hora)

    if(hora >= 7 && hora < 12){
        saludoTxt.textContent = `¡Buenos días, ${name}!`
    }
    else if (hora >= 12 && hora < 20){
        saludoTxt.textContent = `¡Buenas tardes, ${name}!`
    }
    else{            
        saludoTxt.textContent = `¡Buenas noches, ${name}!`
    }
}

//HACE QUE AL PULSAR GUARDAR CUMPLA LA FUNCION GUARDARNOMBRE
submitButton.addEventListener ('click', guardarNombre)
//HACE QUE AL PULSAR EL BTN ENTER CUMPLA LA FUNCION GUARDARNOMBRE
nameInput.addEventListener ('keypress', function (e){
    if (e.key === 'Enter'){
        guardarNombre()
    }
})

// COMPROBAR SI YA HAY UN NOMBRE GUARDADO
// SI HAY UN NOMBRE GUARDADO LO MUESTRO
// LEO EL LOCAL STORAGE Y GUARDO EL NOMBRE
const nombreGuardado = localStorage.getItem('nombreUsuario')
if (nombreGuardado) {
    mostrarNombre(nombreGuardado)
}