// class Hidden {
//   constructor(id) {
//     this.hidden = document.getElementById(id);
//   }
//   show() {
//     this.hidden.classList.remove("hidden")
//   }

//   hide() {
//     this.hidden.classList.add("hidden")
//   }
// }

// const dom = () => {
// const butUser = document.getElementById("butUser");
// const signinExit = document.getElementById("signinExit");
// const signinBut = document.getElementById("signinBut");
// const signin = document.getElementById("signin");
// const signinPutEmail = document.getElementById("signinPutEmail");
// const signinPutPassword = document.getElementById("signinPutPassword");
// butUser.addEventListener("click", () => {
//   signinHidden.show()
// });
// signinExit.addEventListener("click", () => {
//   signinHidden.hide()
// });
// signinBut.addEventListener("click", () => {
//   const signinEmail = signinPutEmail.value;
//   const signinPassword = signinPutPassword.value;
//   const curUser = { signinEmail, signinPassword };
//   console.log(curUser);
// });

// };
// document.addEventListener("DOMContentLoaded", dom);

const modal = new Modal({
  title: "Вход для зарегистрированных пользователей",
  text: "Введите ваши данные",
   butOkSignin: () => {
     
   },

  // butClickCan: () => {
  //   let windCansel;
  // },
});
document.addEventListener("DOMContentLoaded", () => {
  const butClick = document.getElementById("butUser");
  butClick.addEventListener("click", () => {
    modal.showModal();
  });
  
});
