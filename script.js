"use strict";

const seeMoreButton = document.querySelector(".see-more");
const seeLessButton = document.querySelector(".see-less");
const hiddenSummary = document.querySelectorAll(".summary-content");
const contentExtension = document.querySelector(".content-extension");
const discussionBlockButton = document.querySelector(
  ".discussion-block-expand"
);
const hiddenResponse = document.querySelectorAll(".hidden-response");
const createTopicButton = document.querySelector(".orange-button");
const newTopicSection = document.querySelector(".share-your-questions");
const floatLine = document.querySelector(".float-line");
const topicForm = document.querySelector(".form");

// EXPANDIR RESUMO
seeMoreButton.addEventListener("click", function () {
  contentExtension.classList.toggle("content-hide");
  hiddenSummary.forEach((paragraph) => {
    paragraph.classList.remove("content-hide");
  });
});

// RECOLHER RESUMO
seeLessButton.addEventListener("click", function () {
  contentExtension.classList.toggle("content-hide");
  hiddenSummary.forEach((paragraph) => {
    paragraph.classList.add("content-hide");
  });
});

// EXPANDINDO RESPOSTAS DO POST
discussionBlockButton.addEventListener("click", function () {
  hiddenResponse.forEach((response) => {
    response.classList.toggle("hidden-response");
  });
});

// MOSTRANDO FORMULÁRIO
createTopicButton.addEventListener("click", function () {
  newTopicSection.classList.toggle("hide-section");
  floatLine.classList.toggle("hide-section");
  topicForm.classList.toggle("hide-section");
});
