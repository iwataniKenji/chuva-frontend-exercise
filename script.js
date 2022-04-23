"use strict";

// SELECIONANDO BOTÕES DO NAV LATERAL
const sidebarOptionsNav = document.querySelector(".sidebar-options");
const sidebarOptions = document.querySelectorAll(".options-tab");

sidebarOptionsNav.addEventListener("click", function (e) {
  const button = e.target.closest(".options-tab");
  if (!button) return;

  sidebarOptions.forEach((option) => {
    option !== button
      ? option.classList.remove("selected-tab")
      : button.classList.add("selected-tab");
  });

  return;
});

// EXPANDIR RESUMO E RECOLHER RESUMO
const seeMoreButton = document.querySelector(".see-more");
const seeLessButton = document.querySelector(".see-less");
const hiddenSummary = document.querySelectorAll(".summary-content");
const contentExtension = document.querySelector(".content-extension");

seeMoreButton.addEventListener("click", function () {
  contentExtension.classList.toggle("content-hide");
  hiddenSummary.forEach((paragraph) => {
    paragraph.classList.remove("content-hide");
  });
});

seeLessButton.addEventListener("click", function () {
  contentExtension.classList.toggle("content-hide");
  hiddenSummary.forEach((paragraph) => {
    paragraph.classList.add("content-hide");
  });
});

// EXPANDINDO RESPOSTAS DO POST
const discussionBlockButton = document.querySelector(
  ".discussion-block-expand"
);
const hiddenResponse = document.querySelectorAll(".hidden-response");

discussionBlockButton.addEventListener("click", function () {
  hiddenResponse.forEach((response) => {
    response.classList.toggle("hidden-response");
  });
});

// MOSTRANDO FORMULÁRIO
const createTopicButton = document.querySelector(".orange-button");
const newTopicSection = document.querySelector(".share-your-questions");
const floatLine = document.querySelector(".float-line");
const topicForm = document.querySelector(".form");

createTopicButton.addEventListener("click", function () {
  newTopicSection.classList.toggle("hide-section");
  floatLine.classList.add("hide-section");
  topicForm.classList.toggle("hide-section");
});

// SUBMETER CONTEÚDO DO FORMULÁRIO E TELA DE SUBMIT
const formButton = document.querySelector(".form-button");
const titleInput = document.querySelector("#title");
const commentInput = document.querySelector("#comment");
const discussionBlock = document.querySelector(".discussion-block");
const submitFormSection = document.querySelector(".submit-form");

formButton.addEventListener("click", function (e) {
  e.preventDefault();
  const title = titleInput.value;
  const comment = commentInput.value;

  if (title.trim() === "" || comment.trim() === "") return;

  titleInput.value = "";
  commentInput.value = "";

  const html = `
        <div class="discussion-block blur">
          <div class="discussion-block-container comment-added">
            <h4>${title}</h4>
            <h5>Anônimo</h5>
            <p>
              ${comment}
            </p>
            <div class="discussion-block-options hide-options">
              <img
              class="options-button"
                alt="Three dots aligned one below the other"
                src="./assets/more-info.png"
              />
              <img class="like-button" alt="Heart icon" src="./assets/like.png" />
              <p>0 like</p>
              <p>0 resposta</p>
            </div>
          </div>
        </div>
        <div class="submit-message">
          <img alt="Double check icon" src="./assets/badge.png" />
          <p>Aguardando feedback dos autores</p>
          <a class="edit-topic-button">Editar tópico</a>
        </div>
        `;
  discussionBlock.insertAdjacentHTML("beforebegin", html);

  floatLine.classList.remove("hide-section");
  submitFormSection.classList.remove("hide-section");
  topicForm.classList.add("hide-section");

  return;
});

// TELA DE SUBMIT
const createOtherTopicButton = document.querySelector(".other-topics-button");

createOtherTopicButton.addEventListener("click", function () {
  floatLine.classList.add("hide-section");
  submitFormSection.classList.add("hide-section");
  topicForm.classList.remove("hide-section");
});