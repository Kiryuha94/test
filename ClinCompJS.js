const dom = () => {
    const but_user = document.getElementById("but_user")
    const signin_exit = document.getElementById("signin_exit")
    const signin_but = document.getElementById("signin_but")
    const signin = document.getElementById("signin")


    but_user.addEventListener("click", () => {
     signin.classList.remove("hidden")
    })

    signin_exit.addEventListener("click", () => {
        signin.classList.add("hidden")
    } )
   
    signin_but.addEventListener("click", () => {
        alert("Дароу!")
    })


}

document.addEventListener('DOMContentLoaded', dom)