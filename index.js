
//Heaeder DOM elements
const colorPicker = document.getElementById("color-picker")
const schemePicker = document.getElementById("scheme-picker")
const schemeBtn = document.getElementById("scheme-btn")

//reserved for color DOM elements


//************* */

//API elements
const apiUrl = "https://www.thecolorapi.com/scheme"
const seedColorHex = "FFFFFF"
let mode = "analogic"
let fullUrl = `${apiUrl}?hex=${seedColorHex}&mode=${mode}&count=6`

fetch(fullUrl)
    .then (response => response.json())
    .then (data=>console.log(data))

    