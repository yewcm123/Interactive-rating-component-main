# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Select Rating Page(Desktop)](./public/SelectRating(Desktop).png)
![Thank You Page(Desktop)](./public/ThankYou(Desktop).png)
![Select Rating Page(Mobile)](./public/SelectRating(IphoneSE).png)
![Thank You Page(Mobile)](./public/ThankYou(iPhone%20SE).png)


### Links

- Solution URL: (https://yewcm123.github.io/interactive-rating-component-main/)
- Live Site URL: (https://github.com/yewcm123/Interactive-rating-component-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

I have learned to structure my content flow more better thanks to my previous challenge. I have used javascript to enable interaction of submiting rating by user in this challenge. I learned to used getElementById and getElementByClass to interact with my html DOM. I also did some simple logic to reset the rating selection when user chose another rating. The example below showed what I did to solve this issue.

```js
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
```

I am able to finish this challenge within a day and I am grateful I challenge myself in Frontend Mentor to grow my frontend skills. 


### Continued development

I will come back to this challenge if I detected any new and better way in doing the structure after I learned more of frontend development myself. I feel like my javascript section is still a bit clunky in this code. I am more used to react way of programming instead of this pure js programming so i will be sure to learn more about this.

### Useful resources

- [Example resource 1](https://codepen.io/tobiasdev/pen/XgegoO) - This helped me in understanding how to change default radio buttons to customer radio button.
- [Example resource 2](https://codepen.io/nikkipantony/pen/wpPGZp) - This too helped me in understanding how to change default radio buttons to customer radio button.

## Author

- Website - [Derrick Yew Choon Min](https://github.com/yewcm123)
- Frontend Mentor - [@yewcm123](https://www.frontendmentor.io/profile/yewcm123)

