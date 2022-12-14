const firstName = document.getElementById("name");
const lastNameInput = document.getElementById("lastly");
const emailInput = document.getElementById("email");
const password = document.getElementById("psw");
const passwordConfirmation = document.getElementById("psw2");
const form = document.getElementById("form");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const submitBtn = document.getElementById("button");

// firstname error messages
const empty = document.getElementById("empty");
const than = document.getElementById("than");
// Error lastname messages
const lastname = document.getElementById("lastname");
const lasthan = document.getElementById("lasthan");
// Error email messages
const deyempty = document.getElementById("emp");
const nocorrect = document.getElementById("invalid");
// error password messages
const deyNull = document.getElementById("emptypass");
const deyExceed = document.getElementById("passexceed");
// error confirm messages
const emptyMsg = document.getElementById("deyempty");
const deyhigherMsg = document.getElementById("deyhi");

 firstName.addEventListener("click", (event) => {
  setTimeout(() => {
    if (firstName.value == "") {
      empty.style.display = "flex";
      than.style.display = "none";
      // location.reload();
    } else if (firstName.value.length < 5) {
      than.style.display = "flex";
      empty.style.display = "none";
    } else {
      than.style.display = "none";
      empty.style.display = "none";
    }
  }, 3000);
});

lastNameInput.addEventListener("change", (event) => {
  setTimeout(() => {
    if (lastNameInput.value == "") {
      lastname.style.display = "flex";
      lasthan.style.display = "none";
    } else if (lastNameInput.value.length < 5) {
      lastname.style.display = "none";
      lasthan.style.display = "flex";
    } else {
      lastname.style.display = "none";
      lasthan.style.display = "none";
    }
  }, 3000);
});

emailInput.addEventListener("change", (event) => {
  setTimeout(() => {
    if (emailInput.value == "") {
      deyempty.style.display = "flex";
      nocorrect.style.display = "none";
      return false;
    } else if (!emailInput.value.match(validRegex)) {
      nocorrect.style.display = "flex";
      deyempty.style.display = "none";
      return false;
    } else {
      nocorrect.style.display = "none";
      deyempty.style.display = "none";
      return false;
    }
  }, 3000);
});
password.addEventListener("change", (event) => {
  setTimeout(() => {
    if (password.value == "") {
      deyNull.style.display = "flex";
      deyExceed.style.display = "none";
      return false;
    } else if (password.value.length < 5) {
      deyExceed.style.display = "flex";
      deyNull.style.display = "none";
      return false;
    } else {
      deyExceed.style.display = "none";
      deyNull.style.display = "none";
      return;
    }
  }, 3000);
});

passwordConfirmation.addEventListener("change", (event) => {
  setTimeout(() => {
    if (passwordConfirmation.value == "") {
      emptyMsg.style.display = "flex";
      deyhigherMsg.style.display = "none";
      return false;
    } else if (!passwordConfirmation.value.match(password.value)) {
      deyhigherMsg.style.display = "flex";
      emptyMsg.style.display = "none";
    } else {
      deyhigherMsg.style.display = "none";
      emptyMsg.style.display = "none";
    }
  }, 3000);
});


submitBtn.addEventListener("click", (event) =>{
  if (firstName.value || lastNameInput.value || emailInput.value || password.value || passwordConfirmation.value == "") {
    empty.style.display = "flex";
    lastname.style.display = "flex";
      deyempty.style.display = "flex";
      deyNull.style.display = "flex";
      emptyMsg.style.display = "flex";
    
    }else{
      empty.style.display = "none";
    lastname.style.display = "none";
      deyempty.style.display = "none";
      deyNull.style.display = "none";
      emptyMsg.style.display = "none";
    }
    localStorage.setItem('firstName', JSON.stringify(firstName.value))
    localStorage.setItem('lastName', JSON.stringify(lastNameInput.value))
    localStorage.setItem('email', JSON.stringify(emailInput.value))
    localStorage.setItem('password', JSON.stringify(password.value))
    localStorage.setItem('confirm', JSON.stringify(passwordConfirmation.value))
    firstName.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    password.value = "";
    passwordConfirmation.value = "";
    // location.reload();
})




