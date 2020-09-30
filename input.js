class Input {
constructor({title}){
    this.title = title
    this.element = this._createInput()
}
getValue(){
  return this.input.value
    
}
_createInput() {
const title = document.createElement("h4")
title.innerText = this.title

const input = document.createElement("input")
this.input = input

const conteiner = document.createElement("div")
conteiner.className = "input"


conteiner.appendChild(title)
conteiner.appendChild(input)

return conteiner
}

}