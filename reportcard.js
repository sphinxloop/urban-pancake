const recipeCardCover = document.getElementById('recipe-card__cover');
const recipeCardInfo = document.getElementById('recipe-card__info');
const recipeCardDuration = document.getElementById('recipe-card__duration');
const recipeCardServings = document.getElementById('recipe-card__servings');
const recipeCardContentContainer = document.getElementById('recipe-card__content-container');
const ingredientsTab = document.getElementById('ingredientsTab');
const preparationsTab = document.getElementById('preparationsTab');
const ingredientsContent = document.getElementById('recipe-card__content--ingredients');
const preparationsContent = document.getElementById('recipe-card__content--preparations');

recipeCardCover.addEventListener('click', () => {
  recipeCardCover.classList.toggle('recipe-card__cover--open');
  recipeCardContentContainer.classList.toggle('recipe-card__content-container--open')
  recipeCardInfo.classList.toggle('recipe-card__info--show');
  recipeCardDuration.classList.toggle('recipe-card__duration--show');
  recipeCardServings.classList.toggle('recipe-card__servings--show');
})

ingredientsTab.addEventListener('click', (e) => {
  e.preventDefault();
  ingredientsTab.classList.add('active');
  preparationsTab.classList.remove('active');
  ingredientsContent.classList.add('recipe-card__content--active');
  preparationsContent.classList.remove('recipe-card__content--active');
})

preparationsTab.addEventListener('click', (e) => {
  e.preventDefault();
  ingredientsTab.classList.remove('active');
  preparationsTab.classList.add('active');
  ingredientsContent.classList.remove('recipe-card__content--active');
  preparationsContent.classList.add('recipe-card__content--active');
})