let div = document.getElementById("match-pass")
let password = document.getElementById("password")
let confirmpass = document.getElementById("confirmpass")

const check = () => {
    if (document.getElementById('password').value == document.getElementById('confirmpass').value) {
        password.style.border = '1px solid green';
        confirmpass.style.border = '1px solid green';
        div.innerHTML = 'Password matches';
        div.style.color = 'green';
    } else {
        password.style.border = '1px solid red'
        confirmpass.style.border = '1px solid red'
        div.innerHTML = '*Passwords do not match';
        div.style.color = 'red';
    }
    password.style.borderRadius = "5px"
    confirmpass.style.borderRadius = "5px"
  }