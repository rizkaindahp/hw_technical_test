//Membuat validasi terhadap form login dan register
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  var form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Check if email is valid
    var email = document.getElementById("email").value;
    if (!validateEmail(email)) {
      swal({
        title: "warning!",
        text: "Please enter a valid email address",
        icon: "warning",
        timer: 1000, // 3000 milliseconds (3 seconds)
        buttons: false,
        showCloseButton: false,
        timerProgressBar: true, // Enable progress bar
      });
      event.preventDefault();
      return;
    }

    // Check if password meets requirements
    var password = document.getElementById("password").value;
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      event.preventDefault();
      return;
    }

    login(email, password);

    console.log(email, password);
  });

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  async function login(email, password) {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });
      // Handle success
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
      alert("Error occurred. Please check console for details.");
    }
  }
});
