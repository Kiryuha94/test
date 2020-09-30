class Button {
  constructor({ text, butClick }) {
    this.text = text;
    this.butClick = butClick
    this.element = this._createButton();

    

  }

  _createButton() {
    const button = document.createElement("button");
    button.innerText = this.text;
    

   
    button.addEventListener("click", this.butClick);
    this.element = button;
button.className = "button"
   
    return button
}
}
