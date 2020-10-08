
class Modal extends Visibility {
  _visibility = false
  
  constructor({ title, text, butOkSignin }) {
    super()
    this.title = title;
    this.text = text;
    this.butOkSignin = butOkSignin;
    
    this.modal = this._createModal();
    this.background = this._createBackGround();
    this._addListenModal();
    
  }
  
  showModal() {
    this.show(this.modal);
    this.show(this.background);
    this._visibility = true
  }
  
  hideModal(){
  
    this._visibility = false
    this.hide(this.modal);
    this.hide(this.background);
  }
  
  
  
  _createModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = 'modal'
    
    const title = document.createElement("h1");
    title.innerText = this.title;
    
    const text = document.createElement("h3");
    text.innerText = this.text;

    const input = new Input({ title: "Email:" });
    const input2 = new Input({ title: "Password:" });
    
    const butClick = () => {
      
      console.log(input.getValue());
      console.log(input2.getValue());
      
      this.butOkSignin();
      alertModalSuccess.showAlert();
      this.hideModal(this.modal)
      this.hideModal(this.background);
    };
    const button = new Button({
      text: "OK",
      butClick,
      
    });
    this.button = button;
    
    const buttonCan = new Button({
      text: "Cancel",
      butClick: () => {
        // this.modal.remove();
        // this.background.remove();
        this.hideModal(this.modal)
        this.hideModal(this.background);
        alertModalFail.showAlert();
       

      },
    });
    this.buttonCan = buttonCan;
    const buTTOns = document.createElement("div");
    
    modal.appendChild(title);
    modal.appendChild(text);
    modal.appendChild(input.element);
    modal.appendChild(input2.element);
    modal.appendChild(buTTOns);
    buTTOns.appendChild(button.element);
    buTTOns.appendChild(buttonCan.element);

    return modal;
  }

  _addListenModal() {
    document.body.addEventListener("keydown", e => {
      const keyEnter = e.key === "Enter"
      const keyCancel = e.key === "Escape"
      if(this._visibility && keyEnter){
        
        // const modal = document.getElementById('modal')
        // document.body.removeChild(modal)
        this.modal.focus()
        this.button.butClick()
        this.hideModal()       
      }
      if(this._visibility && keyCancel){
        this.buttonCan.butClick()
        this.hideModal()
      }

    })

  }


  _createBackGround() {
    const background = document.createElement("div");
    background.className = "background";
    return background;
  }
}
