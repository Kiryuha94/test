class AlertModal {
  constructor({ title, alertHendClick, isSuccess = true }) {
    this.title = title;
    this.alertHendClick = alertHendClick;
    this.isSuccess = isSuccess;
    this.element = this._createAlertModal();
  }

  show() {
    document.body.appendChild(this.element);
  }
  hide() {
    this.element.remove();
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
        this.hide();
      },
    });

    alertModal.appendChild(title);
    alertModal.appendChild(buttonAlert.element);

    return alertModal;
  }
}

const alertModalSuccess = new AlertModal({
  title: "SUCCESS",
});

const alertModalFail = new AlertModal({
  title: "OMG",
  isSuccess: false,
});
