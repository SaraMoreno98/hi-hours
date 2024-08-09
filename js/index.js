const saludoTxt = document.getElementById('saludo')
const nameInputContainer = document.getElementById('name-input-container')
const nameInput = document.getElementById ('name-inputr')
const submitButton = document.getElementById('submit-name')

function guardarNombre () {
    console.log('Guardando el nombre')
}

submitButton.addEventListener ('click', guardarNombre)

nameInput.addEventListener ('keypress', function (e){
    if (e.key === 'Enter'){
        guardarNombre()
    }
})