//***********form submit to create new blog
const formBlog = document.getElementById('form-blog');

const blogCreate = async (e) => {
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

if(formBlog)  
  formBlog.addEventListener('submit', blogCreate);

//***********form submit to update a  blog
const formUpdate = document.getElementById('form-blog-update');

const blogUpdate =  async (e) => { //async
  e.preventDefault();

  const title = document.getElementById('blog-title').value.trim();
  const content = document.getElementById('blog-content').value.trim();
  const blogID = document.getElementById('update-blog-button').getAttribute("label");

  
  const inputs = {
    title: title,
    content: content,
    id: blogID
  };

  console.log("###", inputs);

  if (inputs) {
    const response =  await fetch('/api/blogs/update-blog', { //await
      method: 'PUT',
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

if(formUpdate)
  formUpdate.addEventListener('submit', blogUpdate);

  //***********form submit to  update a  blog
const delButton = document.getElementById('delete-blog-button');

const blogDelete =  async (e) => { //async
  e.preventDefault();

  const blogID = document.getElementById('delete-blog-button').getAttribute("label");

  
  const inputs = {
    id: blogID
  };

  console.log("###", inputs);

  if (inputs) {
    const response =  await fetch('/api/blogs/delete-blog', { //await
      method: 'DELETE',
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

if(delButton)
  delButton.addEventListener('click', blogDelete);


//***********home button click
const home = document.getElementById("home-button")

home.addEventListener("click", async () => {
  document.location.replace('/');

})

//***********dashboard button click
const dashboard = document.getElementById("dashboard-button")

dashboard.addEventListener("click", async() => {
    
  document.location.replace('/api/blogs/dashboard');

})
