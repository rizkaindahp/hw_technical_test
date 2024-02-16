//Membuat validasi terhadap form login dan register

function validasi_input(form) {
  if (form.username.value == "") {
    alert("Username masih kosong!");
    form.username.focus();
    return false;
  }

  pola_username = /^[a-zA-Z0-9\_\-]{9,100}$/;
  if (!pola_username.test(form.username.value)) {
    alert("Username minimal 9 karakter saja");
    form.username.focus();
    return false;
  }

  pola_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!pola_email.test(form.email.value)) {
    alert("Email yang anda tulis tidak benar atau masih kosong");
    form.email.focus();
    return false;
  }

  if (form.password.value == "") {
    alert("Password masih kosong!");
    form.password.focus();
    return false;
  }

  if (form.ulangi_password.value == "") {
    alert("Konfirmasi Password masih kosong");
    form.ulangi_password.focus();
    return false;
  }

  return true;
}

function checkPass() {
  var pass1 = document.getElementById("pass1");
  var pass2 = document.getElementById("pass2");
  var message = document.getElementById("confirmMessage");
  var goodColor = "#66cc66";
  var badColor = "#ff6666";

  if (pass1.value == pass2.value) {
    pass2.style.backgroundColor = goodColor;
    message.style.color = goodColor;
    message.innerHTML = "Password cocok";
  } else {
    pass2.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = "Password tidak cocok";
  }
}
