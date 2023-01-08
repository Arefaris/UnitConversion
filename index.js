const convertEl = document.getElementById("BConvert")
const valueEL = document.getElementById("value")
const Length = document.getElementById("Length")
const Volume = document.getElementById("Volume")
const Mass = document.getElementById("Mass")

let meters = 0
let feet = 0

let liters = 0
let gallons = 0

let kilograms = 0
let pounds = 0
let number = valueEL.value

convert()
render()

function render() {
                    Length.innerHTML = `<p class="h2CSS">Length (Meter/Feet)</p>
                    <p class="h3CSS">${number} meters = ${meters} feet | ${number} feet = ${feet} meters</p>`

                    Volume.innerHTML = `<p class="h2CSS">Volume (Liters/Gallons)</p>
                    <p class="h3CSS">${number} liters = ${liters} gallons | ${number} gallons = ${gallons} liters</p>`
                    
                    Mass.innerHTML = `<p class="h2CSS">Mass (Kilograms/Pounds)</p>
                    <p class="h3CSS">${number} kilos = ${kilograms} pounds | ${number} pounds = ${pounds} kilos</p>`
}

convertEl.addEventListener("click", function() {
    convert()
    render()
})

function convert(){
    number = valueEL.value
    //taking number
    number = Number(number)
    //meters
    meters = number * 3.2808
    //feets
    feet = number / 3.2808
    //liters
    liters = number / 3.785
    //gallons
    gallons = number * 3.7854
    //killogramms
    kilograms = number * 2.2046
    //pounds
    pounds = number / 2.2046

    //round
    meters = meters.toFixed(3)
    liters = liters.toFixed(3)
    kilograms = kilograms.toFixed(3)
    gallons = gallons.toFixed(3)
    feet = feet.toFixed(3)
    pounds = pounds.toFixed(3)
    
}