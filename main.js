const ratingPage = document.getElementById("rating-page");
const thankYouPage = document.getElementById("thank-you-page");
const radioButton = document.querySelectorAll(".radio-button")
const submitRatingButton = document.getElementById("submit-button");
const ratingValue = document.getElementById("rating-value");

let ratingValueSelected = null;

const RatingClicked = (e) => {  
  ratingValueSelected = e.target.innerText;
  console.log(ratingValueSelected)
  for (let i = 0; i < radioButton.length; i++) {
    if (radioButton[i].getElementsByTagName("label")[0].innerText !== ratingValueSelected)
    {
      radioButton[i].classList.remove("selected")
    }else{
      radioButton[i].classList.add("selected")
    }
  }
};

radioButton.forEach((i)=>{i.addEventListener("click", RatingClicked)} )

submitRatingButton.addEventListener("click", (e) => {
  if (ratingValueSelected === null) {
    console.log("not selected");
  } else {
    document.getElementById("rating-value").innerHTML = ratingValueSelected
    ratingPage.style.display = "none";
    thankYouPage.style.display = "flex";
  }
});
