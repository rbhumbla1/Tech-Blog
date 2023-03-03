
const home = document.getElementById("home-button")

home.addEventListener("click", async () => {

  document.location.replace('/');

})

const newBlog = document.getElementById("new-blog-button")

newBlog.addEventListener("click", async () => {

  document.location.replace('/blog');

})