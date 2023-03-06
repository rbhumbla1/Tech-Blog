//***********Click on any card in the homepage
cardEls = document.querySelectorAll("#blog-card");

cardEls.forEach((card) => {
  card.addEventListener("click",  async() => {

    label = card.getAttribute("label");
    console.log("****label of card = ", label);
    document.location.replace('/comment/' + label);
  
  })
});


//***********click on Login Button
const logIn = document.getElementById("login-button")
if(logIn !== null){
logIn.addEventListener("click", async()=> {
    document.location.replace("/login")
})
}

//***********click on dashboard button
const dashboard = document.getElementById("dashboard-button")
dashboard.addEventListener("click", async() => {
    console.log("dashboard clicked")
  document.location.replace('/api/blogs/dashboard');

})