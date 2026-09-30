const portfolioContent = document.querySelector("#portfolio-content");

/* Intro */
const introSection = document.createElement("section");
introSection.classList.add("intro");

const introHeader = document.createElement("h1");
introHeader.textContent = "Kim Teresia Henriksen";

const introTitle = document.createElement("p");
introTitle.textContent = "Frontend Development";
introTitle.classList.add("intro-title");

const profileImage = document.createElement("img");
profileImage.src = "./images/profilepict.jpg";
profileImage.alt = "Kim Teresia Henriksen";
profileImage.classList.add("profile-image");

const introText = document.createElement("p");
introText.textContent =
  "I work as an IT consultant and have studied Frontend Development, where I have worked with HTML, CSS and JavaScript. I enjoy creating websites, learning new things and continuing to develop my skills.";
introText.classList.add("intro-text");

introSection.append(profileImage, introHeader, introTitle, introText);
portfolioContent.append(introSection);
