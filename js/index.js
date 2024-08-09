const saludoTxt = document.getElementById('saludo')
const nameInputContainer = document.getElementById('name-input-container')
const nameInput = document.getElementById ('name-input')
const submitButton = document.getElementById('submit-name')

function guardarNombre () {
    // LEO LO QUE HAY EN EL INPUT Y LO GUARDO EN NAME
    const name = nameInput.value.trim()
    saludoTxt.textContent = `¡Hola, ${name}!`
    nameInputContainer.style.display = 'none'
}

//HACE QUE AL PULSAR GUARDAR CUMPLA LA FUNCION GUARDARNOMBRE
submitButton.addEventListener ('click', guardarNombre)
//HACE QUE AL PULSAR EL BTN ENTER CUMPLA LA FUNCION GUARDARNOMBRE
nameInput.addEventListener ('keypress', function (e){
    if (e.key === 'Enter'){
        guardarNombre()
    }
})