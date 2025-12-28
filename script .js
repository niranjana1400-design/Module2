const emailR=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const phoneR=/^[0-9]{10}$/;
const cityR=/^[A-Za-z ]+$/;
const passR=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

/* PASSWORD TOGGLE */
function togglePassword(id,el){
  const input=document.getElementById(id);
  if(input.type==="password"){
    input.type="text";
    el.innerText="Hide";
  }else{
    input.type="password";
    el.innerText="Show";
  }
}

/* SIGNUP */
signupForm.addEventListener("submit",e=>{
  e.preventDefault();

  emailErr.innerText=phoneErr.innerText=cityErr.innerText=passErr.innerText=confirmErr.innerText="";

  let valid=true;

  if(!emailR.test(email.value)){emailErr.innerText="Invalid email";valid=false;}
  if(!phoneR.test(phone.value)){phoneErr.innerText="Phone must be 10 digits";valid=false;}
  if(!cityR.test(city.value)){cityErr.innerText="Only alphabets allowed";valid=false;}
  if(!passR.test(password.value)){passErr.innerText="Min 8 chars letters & numbers";valid=false;}
  if(password.value!==confirmPassword.value){confirmErr.innerText="Passwords do not match";valid=false;}

  if(valid){
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    localStorage.setItem("phone",phone.value);
    localStorage.setItem("city",city.value);
    alert("Signup successful! Please login.");
  }
});

/* LOGIN */
loginForm.addEventListener("submit",e=>{
  e.preventDefault();

  loginEmailErr.innerText=loginPassErr.innerText="";

  if(!emailR.test(loginEmail.value)){
    loginEmailErr.innerText="Invalid email";
    return;
  }

  if(
    loginEmail.value===localStorage.getItem("email") &&
    loginPassword.value===localStorage.getItem("password")
  ){
    window.location.href="Tourist.html";
  }else{
    loginPassErr.innerText="Incorrect email or password";
  }
});
