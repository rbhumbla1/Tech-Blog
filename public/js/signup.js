const formCreate = document.getElementById('form-create');

//***********click on sigup button
const signupForm = async (e) => {
  e.preventDefault();
  const firstName = document.getElementById('firstname-input').value.trim();

  const email = document.getElementById('email-input').value.trim();
  const password = document.getElementById('password-input').value.trim();
  
  console.log('test');

  const inputs = {
    name: firstName,
    email: email,
    password: password,
  };

  if (inputs) {
    const response = await fetch('/api/users/signup', {
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

formCreate.addEventListener('submit', signupForm);

//***********click on home button
const home2 = document.getElementById("home-button")

home2.addEventListener("click", async () => {
  document.location.replace('/');

})

//***********click on Login button
const login1 = document.getElementById("login-button")

login1.addEventListener("click", async () => {
  document.location.replace('/login');

})

