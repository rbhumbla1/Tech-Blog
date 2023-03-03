const logIn = document.getElementById("login-button")
const dashboard = document.getElementById("dashboard-button")

if(logIn !== null){
logIn.addEventListener("click", ()=> {
    document.location.replace("/login")
})
}

dashboard.addEventListener("click", () => {
    console.log("dashboard clicked")
  document.location.replace('/api/blogs/dashboard');

})