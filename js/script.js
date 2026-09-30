const portfolioContent = document.querySelector("#portfolio-content");

/* Intro */
const introSection = document.createElement("section");
introSection.classList.add("intro");

const introHeader = document.createElement("h1");
introHeader.textContent = "Kim Teresia Henriksen";

introSection.append(introHeader);
portfolioContent.append(introSection);
