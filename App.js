// GRABING THE VALUABLE HTML ELEMENTS IN OUR JS
const passLen = document.getElementById("PasswordLength");
const passGen = document.getElementById("GenerateBtn");
const passRes = document.getElementById("ResetBtn");
const realPass = document.getElementById("RealPass");

passGen.addEventListener("click", () => {
  // EMPTY GENERATEPASSWORD HOLDER
  let pass = "";
  // set the password length
  let PassLen = passLen.value;

  // different password combination for our new generated passowrd
  let combination =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,@#$%&+-?";

  // iterate to generate different passowrd combination looks
  function PasswordGenrator() {
    for (let i = 1; i <= PassLen; i++) {
      let random = Math.floor(Math.random() * combination.length + 1);
      pass += combination.charAt(random);
    }
    return pass;
  }

  let GeneratedPassword = PasswordGenrator();
  realPass.textContent = GeneratedPassword;
});

// WHEN RESET BUTTON 
passRes.addEventListener("click" , () => {
    window.location.reload();
})