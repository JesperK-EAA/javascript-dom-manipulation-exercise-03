"use strict";

// Funktion erklæring
function updateBackground() {
  const width = window.innerWidth;
   
  if (width < 640) {
    document.body.style.background = "purple";
  } 
  else if (width < 760) {
    document.body.style.background = "yellow";
  } 
  else if (width < 900) {
    document.body.style.background = "blue";
  } 
  else if (width < 1100) {
    document.body.style.background = "red";
  } 
  else if (width < 1300) {
    document.body.style.background = "green";
  } 
  else {
    document.body.style.background = "lightgray";
  }
};

// Kør ved load
updateBackground();

// Kør igen når vinduet ændres
window.addEventListener("resize", updateBackground);
