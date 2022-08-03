let fiveColors = []
let html = ""
const colorInput = document.querySelector('input[type=color]')
const colorButton = document.querySelector('button')
const colorVariable = '--yellow'

colorInput.addEventListener('change', e => {
    html= ""
    const initVal = String(e.target.value).substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${initVal}&mode=triad&count=5`)
    .then(response => response.json())
    .then(({colors}) => {
        // Trying to get an array of the colors from the API
        col=[]
        for (let color of colors) {
            col.push(color.hex.value)
        }
        
        let color = col.map(function(num) {
            html+=`
            <style>
            .color {
                height: 80vh;
                width: 100%;
            }
            </style>
            
            <div class="individual-color" data-clipboard-text="${num}" style="cursor:pointer">
                <div class="color" id="copy" style="background:${num}"></div>
                <p class="color-hex">${num}</p>
                <button class="btn">
                Copy
            </button>
            </div>
            
                `
            document.getElementById("colors-arr").innerHTML = html
        })
        
        })
    
})

document.documentElement.style
    .setProperty('--my-variable-name', document.getElementById("color-pick").value)

let clipBoard = new ClipboardJS('.individual-color')

