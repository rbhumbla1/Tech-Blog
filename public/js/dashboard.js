//***********Click on any card in the dashboard
cardEls = document.querySelectorAll("#blog-card");

cardEls.forEach((card) => {
  card.addEventListener("click",  async() => {

    label = card.getAttribute("label");
    console.log("****label of card = ", label);
    document.location.replace('/blog/' + label);
  
  })
});



//***********Home button click
const home = document.getElementById("home-button")

home.addEventListener("click", async() => {   //async

  document.location.replace('/');

})

//***********Create new Blog button
const newBlog = document.getElementById("new-blog-button")

newBlog.addEventListener("click", async () => {

  document.location.replace('/blog');

})