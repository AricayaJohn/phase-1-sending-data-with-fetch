//makes a POST request to /users with a name and email
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.querySelector('body').append(object.id);
      })
      .catch(error => {
        console.error(error);
        document.querySelector('body').append(error.message);
      });
  }