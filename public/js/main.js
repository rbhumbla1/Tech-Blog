//Clicking on Expense button in nav bar will take the user to expense page
const login = document.getElementById("login-button")

login.addEventListener("click", async () => {
  // document.location.replace('/api/expenses/spending');
  document.location.replace('/login');

})

//Clicking on Expense button in nav bar will take the user to expense page
const logout = document.getElementById("logout-button")

logout.addEventListener("click", async () => {
 
  document.location.replace('/');

})

//Clicking on Expense button in nav bar will take the user to expense page
const home = document.getElementById("home-button")

home.addEventListener("click", async () => {

  document.location.replace('/');

})