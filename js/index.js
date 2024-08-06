const newItem = document.getElementById("newItem")
const form = document.querySelector("form")
const feito = document.getElementById("check")
const lixo = document.getElementById("lixo")
const text = document.getElementById("text")


// feito.addEventListener("input" , () => {
//     text.classList.add("feito")
// })



newItem.addEventListener("input" , () => {
})

form.onsubmit = (event) => {
    event.preventDefault()

    createElement(newItem.value)
}






function createElement(item){
    const list = document.getElementById("list")
    const newElement = document.createElement("div") 
    newElement.classList.add("item")

    const check = document.createElement("div")
    check.classList.add("check")

    const input = document.createElement("input")
    input.type = "checkbox"
    input.id = "check"
    const p = document.createElement("p")
    p.id = "text"
    const span = document.createElement("span")
    const img = document.createElement("img")
    img.src = "/assets/lixo.svg"
    img.id = "lixo"

    p.textContent = `${item}`
    

    newElement.append(check)
    newElement.append(span)
    span.append(img)
    check.append(input)
    check.append(p)

    list.append(newElement)

    
}