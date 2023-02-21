const logIn = document.getElementById("login-button")
const create = document.querySelector(".createbtn")
const dashboard = document.getElementById("dashboard-button")


logIn.addEventListener("click", ()=> {
    document.location.replace("/login")
})

create.addEventListener("click",()=> {
    document.location.replace("/signup")
})


// dashboard.addEventListener("click", () => {
//     console.log("dashboard clicked")
//   document.location.replace('/dashboard');

// })