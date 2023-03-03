//form submit
const formBlog = document.getElementById('form-blog');


const blogForm = async (e) => {
  e.preventDefault();

  const title = document.getElementById('blog-title').value.trim();
  const content = document.getElementById('blog-content').value.trim();
  
  const inputs = {
    title: title,
    content: content,
  };

  if (inputs) {
    const response = await fetch('/api/blogs/create-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(inputs),
    });

    if (response.ok) {

      document.location.replace('/api/blogs/dashboard');

    } else {
      alert(response.statusText);
    }
  }
};

formBlog.addEventListener('submit', blogForm);


//home button click
const home = document.getElementById("home-button")

home.addEventListener("click", async () => {
  document.location.replace('/');

})

//dashboard button click
const dashboard = document.getElementById("dashboard-button")

dashboard.addEventListener("click", async() => {
    
  document.location.replace('/api/blogs/dashboard');

})
