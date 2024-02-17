//Membuat validasi terhadap form login dan register
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  var form = document.getElementById("loginForm");
  var register = document.getElementById("registForm");

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
      swal({
        title: "warning!",
        text: "Password must be at least 8 characters long.",
        icon: "warning",
        timer: 1000, // 3000 milliseconds (3 seconds)
        buttons: false,
        showCloseButton: false,
        timerProgressBar: true, // Enable progress bar
      });
      event.preventDefault();
      return;
    }

    login(email, password);

    console.log(email, password);
  });

  register.addEventListener("submit", function (event) {
    event.preventDefault();
    // Check if name is valid
    var name = document.getElementById("regist_name").value;
    if (!validateName(name)) {
      swal({
        title: "warning!",
        text: "Please enter a valid name",
        icon: "warning",
        timer: 1000, // 3000 milliseconds (3 seconds)
        buttons: false,
        showCloseButton: false,
        timerProgressBar: true, // Enable progress bar
      });
      event.preventDefault();
      return;
    }

    // Check if email is valid
    var email = document.getElementById("regist_email").value;
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

    // Check if phone is valid
    var phone = document.getElementById("regist_phone").value;
    if (!validatePhone(phone)) {
      swal({
        title: "warning!",
        text: "Please enter a valid phone number",
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
    var password = document.getElementById("regist_password").value;
    if (password.length < 8) {
      swal({
        title: "warning!",
        text: "Password must be at least 8 characters long.",
        icon: "warning",
        timer: 1000, // 3000 milliseconds (3 seconds)
        buttons: false,
        showCloseButton: false,
        timerProgressBar: true, // Enable progress bar
      });
      event.preventDefault();
      return;
    }

    regist(name, email, phone, password);

    console.log(name, email, phone, password);
  });

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validateName(name) {
    var re = /^[a-zA-Z ]+$/;
    return re.test(name);
  }

  function validatePhone(phone) {
    var re = /^\d+$/;
    return re.test(phone);
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

  async function regist(name, email, phone, password) {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        name: name,
        email: email,
        phone: phone,
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
