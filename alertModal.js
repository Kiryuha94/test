class AlertModal extends Visibility {
  _visibility = false

  constructor({ title, alertHendClick, isSuccess = true }) {
    super()
    this.title = title;
    this.alertHendClick = alertHendClick;
    this.isSuccess = isSuccess;
    this.element = this._createAlertModal();
    this._addListeners()
  }
  
  showAlert() {
   this.show(this.element);
    this._visibility = true
  }

  hideAlert() {
    this.hide(this.element)
    this._visibility = false
  }
  
  _createAlertModal() {
    const alertModal = document.createElement("div");
  
    if (this.isSuccess) {
      alertModal.classList.add("alertSuccess");
    } else {
      alertModal.classList.add("alertFail");
    }

    const title = document.createElement("h2");
    title.innerText = this.title;

    const buttonAlert = new Button({
      text: "OK",
      butClick: () => {
          if (this.alertHendClick) this.alertHendClick();
        this.hideAlert();
      },
    });

    alertModal.appendChild(title);
    alertModal.appendChild(buttonAlert.element);

    return alertModal;

  }

  _addListeners() {
    document.body.addEventListener("keydown", e => {
      const isEnterKey = e.key === "Enter"
      if (this._visibility && isEnterKey) {
        this.hideAlert()
      }
    })
  }
}

const alertModalSuccess = new AlertModal({
  title: "SUCCESS",
});

const alertModalFail = new AlertModal({
  title: "OMG",
  isSuccess: false,
});
