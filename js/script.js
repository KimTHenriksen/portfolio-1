const portfolioContent = document.querySelector("#portfolio-content");

/* Intro */
const introSection = document.createElement("section");
introSection.classList.add("intro");
introSection.id = "home";

const introHeader = document.createElement("h1");
introHeader.textContent = "Kim Teresia Henriksen";

const introTitle = document.createElement("p");
introTitle.textContent = "Frontend Development";
introTitle.classList.add("intro-title");

const profileImage = document.createElement("img");
profileImage.src = "./images/profilepict.jpg";
profileImage.alt = "Potrait of Kim Teresia Henriksen";
profileImage.classList.add("profile-image");

const introText = document.createElement("p");
introText.textContent =
  "I work as an IT consultant and have studied Frontend Development, where I have worked with HTML, CSS and JavaScript. I enjoy creating websites, learning new things and continuing to develop my skills.";
introText.classList.add("intro-text");

introSection.append(profileImage, introHeader, introTitle, introText);
portfolioContent.append(introSection);

/* Projects */
const projectSection = document.createElement("section");
projectSection.classList.add("projects");
projectSection.id = "projects";

const projectHeader = document.createElement("h2");
projectHeader.textContent = "Projects";
projectHeader.classList.add("project-header");

const projectCards = document.createElement("div");
projectCards.classList.add("project-cards");

const projects = [
  {
    title: "Square Eyes",
    image: "./images/squareeyes.jpg",
    alt: "Square Eyes website",
    description:
      "A movie website built with HTML and CSS, where you can explore movie categories, product pages and navigate the site.",
    github: "https://github.com/KimTHenriksen/square-eyes",
    website: "https://kimthenriksen.github.io/square-eyes/",
  },
  {
    title: "JavaScript 1",
    image: "./images/javascript1.jpg",
    alt: "JavaScript 1 website",
    description:
      "A movie website built with HTML, CSS and JavaScript, using an API to display movies, search and add to cart.",
    github: "https://github.com/KimTHenriksen/JS1",
    website: "https://kimthenriksen.github.io/JS1/",
  },
  {
    title: "Semester Project 1",
    image: "./images/semesterproject1.png",
    alt: "Semester Project 1 website",
    description:
      "A science museum website built with HTML and CSS, with information and activities for children, families, schools and other visitors. ",
    github: "https://github.com/KimTHenriksen/SP1",
    website: "https://kimthenriksen.github.io/SP1/",
  },
];

/* Create project cards */
projects.forEach((project) => {
  const projectCard = document.createElement("article");
  projectCard.classList.add("project-card");

  const cardImage = document.createElement("img");
  cardImage.src = project.image;
  cardImage.alt = project.alt;
  cardImage.classList.add("card-image");

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = project.title;
  cardTitle.classList.add("card-title");

  const cardDescription = document.createElement("p");
  cardDescription.textContent = project.description;
  cardDescription.classList.add("card-description");

  const linkGithub = document.createElement("a");
  linkGithub.href = project.github;
  linkGithub.textContent = "GitHub";
  linkGithub.target = "_blank";
  linkGithub.rel = "noopener noreferrer";
  linkGithub.classList.add("project-link");

  const linkWebsite = document.createElement("a");
  linkWebsite.href = project.website;
  linkWebsite.textContent = "View website";
  linkWebsite.target = "_blank";
  linkWebsite.rel = "noopener noreferrer";
  linkWebsite.classList.add("project-link");

  projectCard.append(
    cardImage,
    cardTitle,
    cardDescription,
    linkGithub,
    linkWebsite,
  );

  projectCards.append(projectCard);
});

projectSection.append(projectHeader, projectCards);
portfolioContent.append(projectSection);

/* Contact */
const contactSection = document.createElement("section");
contactSection.classList.add("contact");
contactSection.id = "contact";

const contactHeader = document.createElement("h2");
contactHeader.textContent = "Contact";

const contactText = document.createElement("p");
contactText.textContent =
  "Here you can find my contact information, CV and cover letter.";
contactText.classList.add("contact-text");

/* Profile links */
const profileLinks = document.createElement("div");
profileLinks.classList.add("contact-links");

const githubLink = document.createElement("a");
githubLink.href = "https://github.com/KimTHenriksen";
githubLink.textContent = "GitHub";
githubLink.target = "_blank";
githubLink.rel = "noopener noreferrer";
githubLink.classList.add("contact-link");

const linkedinLink = document.createElement("a");
linkedinLink.href =
  "https://www.linkedin.com/in/kim-teresia-henriksen-5a9bb6333/";
linkedinLink.textContent = "LinkedIn";
linkedinLink.target = "_blank";
linkedinLink.rel = "noopener noreferrer";
linkedinLink.classList.add("contact-link");

profileLinks.append(githubLink, linkedinLink);

/* Document links */
const documentLinks = document.createElement("div");
documentLinks.classList.add("contact-links");

const linkCV = document.createElement("a");
linkCV.href = "./documents/cv.pdf";
linkCV.textContent = "View CV";
linkCV.target = "_blank";
linkCV.rel = "noopener noreferrer";
linkCV.classList.add("contact-link");

const linkCoverLetter = document.createElement("a");
linkCoverLetter.href = "./documents/cover_letter.pdf";
linkCoverLetter.textContent = "View Cover Letter";
linkCoverLetter.target = "_blank";
linkCoverLetter.rel = "noopener noreferrer";
linkCoverLetter.classList.add("contact-link");

documentLinks.append(linkCV, linkCoverLetter);

contactSection.append(contactHeader, contactText, profileLinks, documentLinks);

portfolioContent.append(contactSection);
