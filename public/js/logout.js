const logOut = document.getElementById("logout-button")


if(logOut !== null){
logOut.addEventListener("click", async () => {
  const response = await fetch("/api/users/logout", {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
})
}