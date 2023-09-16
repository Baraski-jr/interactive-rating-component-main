const rates = document.querySelectorAll(".rate-digit");
const submitBtn = document.querySelector(".submit-btn");
const mainDisplay = document.querySelector(".rates");
const successDisplay = document.querySelector(".success-rate-msg");
const DB = { score: "", previousActive: "", currentActive: "" };
rates.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    // Remove the Hightlight on the click rate
    if (!(DB["previousActive"] == "")) {
      DB["previousActive"].classList.remove("active");
    }
    // Store the selected rate in the Object
    DB["score"] = e.target.textContent;
    // Hightlight on the click rate
    e.target.classList.add("active");
    // Store the click on element in the object for remove of hightlight when new element is click on
    DB["previousActive"] = e.target;

    submitBtn.addEventListener("click", (e) => {
      // Display the Thank you state
      mainDisplay.classList.replace("show", "hide");
      successDisplay.classList.replace("hide", "show");
      // The element which the selected the rate value will be display on is not visible to the DOM becuase the parent is hidden
      const score = document.querySelector(".score");
      // Display the selected rate value
      score.textContent = DB["score"];
    });
  });
});
