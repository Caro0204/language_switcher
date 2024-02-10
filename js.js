"use strict";

const selectElement = document.querySelector(".sprog");
const result = document.querySelector(".result");
let locale = "da";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

console.log(texts[locale].texts[0].text);

selectElement.addEventListener("change", (event) => {
  locale = `${event.target.value}`;

  texts[locale].texts.forEach((each) => {
    console.log(each.location);
    document.querySelector(each.location).textContent = each.text;
  });
});
