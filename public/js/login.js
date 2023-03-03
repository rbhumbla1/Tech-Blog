const formLogin = document.getElementById('form-login');
const signupLink = document.getElementById('signup-link');
const incorrect = document.getElementById('incorrect');



const loginHandler = async (e) => {
  e.preventDefault();

  const email = document.getElementById('email-input').value.trim();
  const password = document.getElementById('password-input').value.trim();


  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //go to the dashboard when a user logs in
      document.location.replace('/api/blogs/dashboard');
    } else {
      incorrect.innerHTML = 'Incorrect Email/Password';
    }
  }

};
formLogin.addEventListener('submit', loginHandler);

const signupHandler = async () => {

  document.location.replace('/signup');

}
signupLink.addEventListener('click', signupHandler);


const home1 = document.getElementById("home-button")

home1.addEventListener("click", async () => {
  document.location.replace('/');

})



