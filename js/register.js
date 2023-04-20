let userEmailForSingup = $.querySelector("#email"),
  userPhoneNumberEmailForSingup = $.querySelector("#number-phone"),
  userPassEmailForSingup = $.querySelector("#pass"),
  userRepeatPassEmailForSingup = $.querySelector("#repeat-pass"),
  signupFormBtn = $.querySelector(".signup-btn");

signupFormBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let userEmailForSingupValue = userEmailForSingup.value,
    userPhoneNumberEmailForSingupValue = userPhoneNumberEmailForSingup.value,
    userPassEmailForSingupValue = userPassEmailForSingup.value,
    userRepeatPassEmailForSingupValue = userRepeatPassEmailForSingup.value;

  if (
    userEmailForSingupValue &&
    userPhoneNumberEmailForSingupValue &&
    userPassEmailForSingupValue &&
    userRepeatPassEmailForSingupValue
  ) {
    // code
  }else{
    alert("لطفا اینپوت ها رو به صورت کامل پر کنید :)")
  }
});
