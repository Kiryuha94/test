class Modal {
  constructor({ title, text, butOkSignin }) {
    this.title = title;
    this.text = text;
    this.butOkSignin = butOkSignin;

    this.modal = this._createModal();
    this.background = this._createBackGround();
  }
  show() {
    document.body.appendChild(this.modal);
    document.body.appendChild(this.background);
  }
  //// }

  _createModal() {
    const modal = document.createElement("div");
    modal.className = "modal";

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
      this.modal.remove();
      this.background.remove();
      alertModalSuccess.show();
    };
    const button = new Button({
      text: "OK",
      butClick,     
    });

    const buttonCan = new Button({
      text: "Cancel",
      butClick: () => {
        this.modal.remove();
        this.background.remove();
        alertModalFail.show();
       
      },
    });
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
  _createBackGround() {
    const background = document.createElement("div");
    background.className = "background";
    return background;
  }
}
