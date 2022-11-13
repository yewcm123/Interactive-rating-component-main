const ratingPage = document.getElementById("rating-page");
const thankYouPage = document.getElementById("thank-you-page");

const submitRatingButton = document.getElementById("submit-button");
const ratingValue = document.getElementById("rating-value");

let ratingValueSelected = null;

document.addEventListener("DOMContentLoaded", () => {
  const ratingRadio = document.getElementById("rating-radio");
  for (let label of ratingRadio.children) {
    label
      .getElementsByTagName("input")[0]
      .addEventListener("click", RatingClicked);
  }
});

const RatingClicked = (e) => {
  const ratingRadio = document.getElementById("rating-radio")
  ratingValueSelected = e.target.value;
  for (let label of ratingRadio.children) {
    let ratingCheck = label.getElementsByTagName("input")[0];
    if (ratingCheck.value !== ratingValueSelected) {
      ratingCheck.checked = false;
    }
  }
};

submitRatingButton.addEventListener("click", (e) => {
  if (ratingValueSelected === null) {
    console.log("not selected");
  } else {
    document.getElementById("rating-value").innerHTML = ratingValueSelected
    ratingPage.style.display = "none";
    thankYouPage.style.display = "flex";
  }
});
