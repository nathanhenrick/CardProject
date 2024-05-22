
//* Área do CARTÃO
const $numberCard = document.getElementById('numberCard')
const $personName = document.getElementById('personName')
const $dateNumber = document.getElementById('dateNumber')

const $cvcNumber = document.getElementById('cvcNumber')

let nameCard = 'Jane Appleseed'

//* Área do INPUT
const $textOne = document.getElementById('textOne')
const $numberOne = document.getElementById('numberOne')
const $month = document.getElementById('month')
const $year = document.getElementById('year')
const $cvc = document.getElementById('cvc')

const $submitBtn = document.getElementById('submitBtn')
const $form = document.getElementById('form')

//* Área da programação

$personName.textContent = nameCard

$form.addEventListener('submit', function (e) { //! ENVIO FORMULÁRIO
    if ($textOne.value.length >= 20) {
        e.preventDefault()
        $textOne.value = ''
    }
})

let arrName = [];

$textOne.addEventListener('input', function (event) { //! ZERADO
    if ($textOne.value.length === 0) { //*Colocar letras num array
        arrName = []
        $personName.textContent = nameCard
        return
    }
    // if ($textOne.value.length == 0) {
    //     $personName.textContent = nameCard
    // }
    if (event.inputType === 'insertText') {
        arrName.push(event.data)
    } else if
        (event.inputType === 'deleteContentBackward') {
            arrName.pop()
        }
        $personName.textContent = arrName.join('')
})
