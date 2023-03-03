const home2 = document.getElementById("home-button")

home2.addEventListener("click", async () => {
  document.location.replace('/');

})

const dashboard = document.getElementById("dashboard-button")

dashboard.addEventListener("click", () => {
    
  document.location.replace('/api/blogs/dashboard');

})