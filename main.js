const ratingPage = document.getElementById("rating-page");
const thankYouPage = document.getElementById("thank-you-page");
const radioButton = document.querySelectorAll(".radio-button")
const submitRatingButton = document.getElementById("submit-button");
const ratingValue = document.getElementById("rating-value");

let ratingValueSelected = null;

const RatingClicked = (e) => {  
  ratingValueSelected = e.target.innerText;
  for (let i = 0; i < radioButton.length; i++) {
    if (radioButton[i].getElementsByTagName("input")[0].value !== ratingValueSelected)
    {
      radioButton[i].classList.remove("selected")
    }else{
      radioButton[i].classList.add("selected")
    }
  }
};

window.addEventListener('DOMContentLoaded', ()=> {
  for (let button = 0; button < radioButton.length; button++)
  {
    radioButton[button].addEventListener("click", RatingClicked)
  }
})


submitRatingButton.addEventListener("click", (e) => {
  if (ratingValueSelected === null) {
    console.log("not selected");
  } else {
    document.getElementById("rating-value").innerHTML = ratingValueSelected
    ratingPage.style.display = "none";
    thankYouPage.style.display = "flex";
  }
});
