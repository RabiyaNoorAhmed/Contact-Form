// Form Validation
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phonenum = document.getElementById("phonenum");
const message = document.getElementById("message");

// Add Event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
})

// send data
const sendData = (fullnameVal, sRate, count) => {
  if (sRate === count) {
    Swal.fire({
      title: "We've got your message, " + "\n" + fullnameVal,
      text: "Will get back to you soon :)",
      icon: "success",
      confirmButtonText: 'OK',
      customClass: {
        popup: 'custom-swal',
        confirmButton: 'custom-confirm-button-class',
      }
    });
  }
}

// Final Validation
const successMsg = (fullnameVal) => {
  let inputCon = document.getElementsByClassName('input-container');
  let count = inputCon.length - 1;
  for (let i = 0; i < inputCon.length; i++) {
    if (inputCon[i].className === "input-container success") {
      let sRate = 0 + i;
      sendData(fullnameVal, sRate, count);
    } else {
      return false;
    }

  }
}

// Email Validation
const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 3) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
}

// validiate Function
const validate = () => {
  const fullnameVal = fullname.value.trim();
  const emailVal = email.value.trim();
  const phonenumVal = phonenum.value.trim();
  const messageVal = message.value.trim();

  // validation fullname
  if (fullnameVal === "") {
    setErrorMsg(fullname, 'Please Enter Your Full Name');
  } else if (fullnameVal.length <= 5) {
    setErrorMsg(fullname, 'Full Name must be at least 6 characters long');
  } else {
    setSuccessMsg(fullname);
  }
  // validation email
  if (emailVal === "") {
    setErrorMsg(email, 'Please Enter Your Email');
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, 'Please Enter Your Valid Email');
  } else {
    setSuccessMsg(email);
  }
  // validation Phone Number
  if (phonenumVal === "") {
    setErrorMsg(phonenum, 'Please Enter Your Phone Number');
  } else if (phonenumVal.length != 11) {
    setErrorMsg(phonenum, 'Please Enter Valid Phone Number');
  } else {
    setSuccessMsg(phonenum);
  }
  // validation Message
  if (messageVal === "") {
    setErrorMsg(message, 'Please Enter Your Message');
  } else {
    setSuccessMsg(message);
  }
  successMsg(fullnameVal);
}

// Error , Success Msgs
function setErrorMsg(input, errormsgs) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector('small');
  inputControl.className = "input-container error"
  small.innerText = errormsgs;
}
function setSuccessMsg(input) {
  const inputControl = input.parentElement;
  inputControl.className = "input-container success"
};