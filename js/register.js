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
    if (userPassEmailForSingupValue == userRepeatPassEmailForSingupValue) {
      let oldUsers = []
      oldUsers = JSON.parse(localStorage.getItem("user"))

      let userDataForRegidter = {
        userEmail: userEmailForSingupValue,
        userPass: userPassEmailForSingupValue,
        userPhone: userPhoneNumberEmailForSingupValue,
      };

      console.log(oldUsers);


      localStorage.setItem("users", JSON.stringify(oldUsers));
      window.location.href = "http://127.0.0.1:5500/index.html";


      alert('ثبت نام شما با موفقیت انجام شد')

    } else {
      alert("لطفا پسورد ها رو به صورت کامل پر کنید :)");
    }
  } else {
    alert("لطفا اینپوت ها رو به صورت یکسان پر کنید :)");
  }
});
