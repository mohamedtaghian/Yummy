"use strict";

// Select elements
const navTogglerBtn = document.querySelector(".nav-toggle");
const header = document.querySelector("header");
const openNavBtn = document.querySelector(".open-nav");
const closeNavBtn = document.querySelector(".close-nav");
const navItems = document.querySelectorAll(".nav-item");

const contentSection = document.querySelector(".content");
const contentContainer = document.getElementById("row-content");
const detailsSection = document.querySelector(".meal-details");
const rowDetails = document.querySelector(".row--details");
const closeDetailsBtn = document.querySelector(".btn--close");

const searchBtn = document.querySelector(".nav--search");
const searchSection = document.querySelector(".search");
const searchNameInput = document.getElementById("search-name");
const searchLetterInput = document.getElementById("search-letter");

const categoriesBtn = document.querySelector(".nav--categories");
const categoriesSection = document.querySelector(".meals-category");
const categoriesContainer = document.querySelector(".row-categories");

const areaBtn = document.querySelector(".nav--area");
const areaSection = document.querySelector(".area");
const areaContainer = document.querySelector(".row-areas");

const ingredientsBtn = document.querySelector(".nav--ingredients");
const ingredientsSection = document.querySelector(".ingredients");
const ingredientsContainer = document.querySelector(".row-ingredients");

const contactBtn = document.querySelector(".nav--contact");
const contactSection = document.querySelector(".contact");

const spinner = document.querySelector(".spinner");

const userNameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("tel-input");
const ageInput = document.getElementById("age-input");
const passwordInput = document.getElementById("password-input");
const rePasswordInput = document.getElementById("repassword-input");
const btnSubmit = document.querySelector(".btn--submit");

const invalidName = document.querySelector(".invalid-name");
const invalidEmail = document.querySelector(".invalid-email");
const invalidTel = document.querySelector(".invalid-tel");
const invalidAge = document.querySelector(".invalid-number");
const invalidPassword = document.querySelector(".invalid-password");
const invalidRePassword = document.querySelector(".invalid-repassword");

const userNameReg = /^[a-z0-9_-]{3,15}$/i;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
const ageReg = /^[0-9]{1,3}$/i;
const passwordReg =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i;

// Helper Functions
const sideNavToggle = function () {
  header.classList.toggle("open");
  openNavBtn.classList.toggle("d-none");
  closeNavBtn.classList.toggle("d-none");

  if (openNavBtn.classList.contains("d-none")) {
    navItems.forEach((item) => item.classList.add("slide-up"));
  } else {
    navItems.forEach((item) => item.classList.remove("slide-up"));
  }
};
const userNameMsg = function () {
  // Show user-name message
  invalidName.classList.remove("d-none");

  // Hide other messages
  invalidEmail.classList.add("d-none");
  invalidTel.classList.add("d-none");
  invalidAge.classList.add("d-none");
  invalidPassword.classList.add("d-none");
  invalidRePassword.classList.add("d-none");
};
const emailMsg = function () {
  // Show email message
  invalidEmail.classList.remove("d-none");

  // Hide other messages
  invalidName.classList.add("d-none");
  invalidTel.classList.add("d-none");
  invalidAge.classList.add("d-none");
  invalidPassword.classList.add("d-none");
  invalidRePassword.classList.add("d-none");
};
const telMsg = function () {
  // Show phone message
  invalidTel.classList.remove("d-none");

  // Hide other messages
  invalidName.classList.add("d-none");
  invalidEmail.classList.add("d-none");
  invalidAge.classList.add("d-none");
  invalidPassword.classList.add("d-none");
  invalidRePassword.classList.add("d-none");
};
const ageMsg = function () {
  // Show phone message
  invalidAge.classList.remove("d-none");

  // Hide other messages
  invalidName.classList.add("d-none");
  invalidEmail.classList.add("d-none");
  invalidTel.classList.add("d-none");
  invalidPassword.classList.add("d-none");
  invalidRePassword.classList.add("d-none");
};
const passMsg = function () {
  // Show phone message
  invalidPassword.classList.remove("d-none");

  // Hide other messages
  invalidName.classList.add("d-none");
  invalidEmail.classList.add("d-none");
  invalidTel.classList.add("d-none");
  invalidAge.classList.add("d-none");
  invalidRePassword.classList.add("d-none");
};
const rePassMsg = function () {
  // Show phone message
  invalidRePassword.classList.remove("d-none");

  // Hide other messages
  invalidName.classList.add("d-none");
  invalidEmail.classList.add("d-none");
  invalidTel.classList.add("d-none");
  invalidAge.classList.add("d-none");
  invalidPassword.classList.add("d-none");
};

const submit = function () {
  if (
    userNameReg.test(userNameInput.value) &&
    emailReg.test(emailInput.value) &&
    phoneReg.test(phoneInput.value) &&
    ageReg.test(ageInput.value) &&
    passwordReg.test(passwordInput.value) &&
    passwordReg.test(rePasswordInput.value)
  ) {
    btnSubmit.classList.remove("disabled");
  }
};

// Display Functions
const displayMeals = function (arr) {
  // Clear contentContainer
  contentContainer.innerHTML = "";

  arr.forEach((item) => {
    const html = `
    <div class="col">
      <div
      data-id = "${item.idMeal}"
        class="meal-item inner position-relative overflow-hidden rounded-2"
      >
        <img
          class="meal-img w-100"
          src="${item.strMealThumb}"
          alt="${item.strMeal}"
        />
        <div
          class="overaly d-flex justify-content-center align-items-center"
        >
          <h3>${item.strMeal}</h3>
        </div>
      </div>
    </div>
            `;

    contentContainer.insertAdjacentHTML("beforeend", html);
  });

  // Hide Spinner
  spinner.classList.add("d-none");
};

const displayMealDetails = function (obj) {
  searchSection.classList.add("d-none");
  // categoriesSection.classList.add("d-none");

  // Clear inner HTML
  rowDetails.innerHTML = "";

  const html = `
    <div class="col-md-4">
              <div class="inner">
                <img
                  class="w-100 rounded-4"
                  src="${obj.strMealThumb}"
                  alt="${obj.strMeal}"
                />
                <h2 class="meal-name my-3 text-white text-center">${obj.strMeal}</h2>
              </div>
            </div>
            <div class="col-md-8">
              <h2 class="main-title text-white">Instructions</h2>
              <p class="meal-description text-white">
                ${obj.strInstructions}
              </p>
              <h3 class="text-white fw-bold">
                Area :
                <span class="meal-area fw-normal"> ${obj.strArea}</span>
              </h3>
              <h3 class="text-white fw-bold">
                Category :
                <span class="meal-category fw-normal"> ${obj.strCategory}</span>
              </h3>
              <h3 class="text-white fw-bold">
                Recipes :
                <div class="mt-2 mb-4 fs-5">
                  <span class="recipe mb-3 badge bg-primary">
                    ${obj.strMeasure1} ${obj.strIngredient1}</span
                  >
                  <span class="recipe mb-3 badge bg-primary">
                    ${obj.strMeasure2} ${obj.strIngredient2}
                  </span>
                  <span class="recipe mb-3 badge bg-primary"> Half Garlic</span>
                  <span class="recipe mb-3 badge bg-primary">
                    ${obj.strMeasure3} ${obj.strIngredient3}</span
                  >
                  <span class="recipe mb-3 badge bg-primary">
                    ${obj.strMeasure4} ${obj.strIngredient4}</span
                  >
                </div>
              </h3>
              <h3 class="text-white fw-bold">
                Tags :
                <div class="mt-3">
                  <button class="btn-source btn btn-success">Source</button>
                  <button class="btn btn-youtube btn btn-danger">
                    Youtube
                  </button>
                </div>
              </h3>
            </div>
  `;

  rowDetails.insertAdjacentHTML("beforeend", html);

  // Hide Spinner
  spinner.classList.add("d-none");
};

const displayCategories = function (arr) {
  // Clear categories container
  categoriesContainer.innerHTML = "";

  arr.forEach((category) => {
    const html = `
      <div class="col">
        <div
        data-category = "${category.strCategory}"
          class="meal-category inner position-relative overflow-hidden rounded-3"
        >
          <img
            class="w-100"
            src="${category.strCategoryThumb}"
            alt="${category.strCategory}"
          />
          <div
            class="category-overlay p-3 d-flex flex-column justify-content-center align-items-center"
          >
            <h3>${category.strCategory}</h3>
            <p class="text-center overflow-hidden h-50">
              ${category.strCategoryDescription
                .split(".")
                .splice(0, 2)
                .join("")}
            </p>
          </div>
        </div>
      </div>
      `;

    categoriesContainer.insertAdjacentHTML("beforeend", html);
  });

  // Hide Spinner
  spinner.classList.add("d-none");
};

const displayArea = function (arr) {
  // Clear area container
  areaContainer.innerHTML = "";

  arr.forEach((area) => {
    const html = `
  <div class="col">
    <div data-area = "${area.strArea}" class="inner area-card text-white text-center">
      <span class="icon"
        ><i class="fa-solid fa-house-laptop fa-4x"></i
      ></span>
      <h3 class="area-head">${area.strArea}</h3>
    </div>
  </div>
    `;

    areaContainer.insertAdjacentHTML("beforeend", html);
  });

  // Hide Spinner
  spinner.classList.add("d-none");
};

const displayIngredients = function (arr) {
  // Clear Ingredients Container
  ingredientsContainer.innerHTML = "";

  arr.forEach((ingredient) => {
    const html = `
  <div class="col">
    <div data-ingredient = "${
      ingredient.strIngredient
    }" class="inner ingredient-card text-white text-center">
      <span class="icon">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
      </span>
      <h3 class="ingredient-title">${ingredient.strIngredient}</h3>
      <p class="ingredient-description overflow-hidden ">
        ${ingredient.strDescription.split(".").splice(0, 2).join("")}
      </p>
    </div>
  </div>
    `;

    ingredientsContainer.insertAdjacentHTML("beforeend", html);
  });

  // Hide Spinner
  spinner.classList.add("d-none");
};

// Request Functions
const getMeals = async function (name = "") {
  try {
    // Hide Categories Section
    // categoriesSection.classList.add("d-none");
    // Hide Area Section
    // areaSection.classList.add("d-none");

    // Display Spinner
    spinner.classList.remove("d-none");

    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );

    const { meals } = await getData.json();
    const wantedMeals = meals?.slice(0, 20);

    // console.log(wantedMeals);
    displayMeals(wantedMeals);
  } catch (error) {
    console.error(error);
  }
};
getMeals();

const getMealDetails = async function (id) {
  try {
    // Display Spinner
    spinner.classList.remove("d-none");

    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const { meals } = await getData.json();
    const [meal] = meals;
    // console.log(meal);
    displayMealDetails(meal);
  } catch (error) {
    console.error(error);
  }
};

const getMealsCategory = async function (category) {
  try {
    // Display Spinner
    spinner.classList.remove("d-none");

    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    const { meals } = await getData.json();
    const wantedMeals = meals?.slice(0, 20);
    // searchSection.classList.add("d-none");
    contentSection.classList.remove("d-none");
    displayMeals(wantedMeals);
    // console.log(wantedMeals);
  } catch (error) {
    console.error(error);
  }
};

const getMealsArea = async function (area) {
  try {
    // Display Spinner
    spinner.classList.remove("d-none");

    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );

    const { meals } = await getData.json();
    const wantedMeals = meals?.slice(0, 20);
    // searchSection.classList.add("d-none");
    contentSection.classList.remove("d-none");
    displayMeals(wantedMeals);
    // console.log(wantedMeals);
  } catch (error) {
    console.error(error);
  }
};
const getMealsIngredient = async function (ingredient) {
  try {
    // Display Spinner
    spinner.classList.remove("d-none");

    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const { meals } = await getData.json();
    const wantedMeals = meals?.slice(0, 20);
    // searchSection.classList.add("d-none");
    contentSection.classList.remove("d-none");
    displayMeals(wantedMeals);
    // console.log(wantedMeals);
  } catch (error) {
    console.error(error);
  }
};

// Event handlers
navTogglerBtn.addEventListener("click", sideNavToggle);

contentContainer.addEventListener("click", function (e) {
  const mealCard = e.target.closest(".meal-item");
  if (mealCard) {
    // Hide content section
    contentSection.classList.add("d-none");

    // Display meal-details section
    detailsSection.classList.remove("d-none");

    const mealId = mealCard.dataset.id;
    // console.log(mealId);
    getMealDetails(mealId);
    // console.log("yarb");
  }
});

closeDetailsBtn.addEventListener("click", function () {
  // Hide details section
  detailsSection.classList.add("d-none");
  // Display content Section
  contentSection.classList.remove("d-none");
});

searchNameInput.addEventListener("input", function () {
  searchSection.classList.remove("d-none");
  getMeals(this.value);
});

searchLetterInput.addEventListener("input", async function () {
  try {
    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${this.value}`
    );

    const { meals } = await getData.json();
    const wantedMeals = meals?.slice(0, 20);

    // console.log(wantedMeals);
    displayMeals(wantedMeals);
  } catch (error) {
    // console.error(error);
  }
});

searchBtn.addEventListener("click", function () {
  // Display Search Section
  searchSection.classList.remove("d-none");

  // Display Content Section
  contentSection.classList.remove("d-none");

  // Hide Details Section
  detailsSection.classList.add("d-none");

  // Hide Categories Section
  categoriesSection.classList.add("d-none");

  // Hide Area Section
  areaSection.classList.add("d-none");

  // Hide Ingredients Section
  ingredientsSection.classList.add("d-none");

  // Hide Contact Section
  contactSection.classList.add("d-none");

  // Clear contentContainer
  contentContainer.innerHTML = "";

  // Toggle side nav
  sideNavToggle();
});

categoriesBtn.addEventListener("click", async function () {
  try {
    // Display Spinner
    spinner.classList.remove("d-none");
    // Display Categories Section
    categoriesSection.classList.remove("d-none");
    // Hide Content Section
    contentSection.classList.add("d-none");
    // Hide Details Section
    detailsSection.classList.add("d-none");
    // Hide Search Section
    searchSection.classList.add("d-none");
    // Hide Area Section
    areaSection.classList.add("d-none");
    // Hide Ingredients Section
    ingredientsSection.classList.add("d-none");
    // Hide Contact Section
    contactSection.classList.add("d-none");

    // Toggle side nav
    sideNavToggle();

    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    const { categories } = await getData.json();

    displayCategories(categories);
    // console.log(categories);
  } catch (error) {
    console.error(error);
  }
});

categoriesContainer.addEventListener("click", function (e) {
  const categoryCard = e.target.closest(".meal-category");
  if (categoryCard) {
    const mealId = categoryCard.dataset.category;
    // console.log(mealId);
    categoriesSection.classList.add("d-none");
    getMealsCategory(mealId);
  }
});

areaBtn.addEventListener("click", async function () {
  try {
    // Display Spinner
    spinner.classList.remove("d-none");
    // Display area section
    areaSection.classList.remove("d-none");
    // Hide content section
    contentSection.classList.add("d-none");
    // Hide details section
    detailsSection.classList.add("d-none");
    // Hide search section
    searchSection.classList.add("d-none");
    // Hide categories section
    categoriesSection.classList.add("d-none");
    // Hide Ingredients section
    ingredientsSection.classList.add("d-none");
    // Hide Contact Section
    contactSection.classList.add("d-none");

    // Toggle side nav
    sideNavToggle();

    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );

    const { meals } = await getData.json();
    displayArea(meals);
  } catch (error) {
    console.error(error);
  }
});

areaContainer.addEventListener("click", function (e) {
  const areaCard = e.target.closest(".area-card");
  if (areaCard) {
    const area = areaCard.dataset.area;
    // console.log(area);
    getMealsArea(area);
    areaSection.classList.add("d-none");
  }
});

ingredientsBtn.addEventListener("click", async function () {
  try {
    // Display Spinner
    spinner.classList.remove("d-none");
    // Display Ingredients Section
    ingredientsSection.classList.remove("d-none");
    // Hide Area Section
    areaSection.classList.add("d-none");
    // Hide Content Section
    contentSection.classList.add("d-none");
    // Hide Details Section
    detailsSection.classList.add("d-none");
    // Hide Search Section
    searchSection.classList.add("d-none");
    // Hide Categories Section
    categoriesSection.classList.add("d-none");
    // Hide Contact Section
    contactSection.classList.add("d-none");

    // Toggle side nav
    sideNavToggle();

    const getData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );

    const { meals } = await getData.json();
    const wabtedMeals = meals.slice(0, 20);
    // console.log(wabtedMeals);
    displayIngredients(wabtedMeals);
  } catch (error) {
    console.error(error);
  }
});

ingredientsContainer.addEventListener("click", function (e) {
  const ingredientCard = e.target.closest(".ingredient-card");
  if (ingredientCard) {
    const ingredient = ingredientCard.dataset.ingredient;
    getMealsIngredient(ingredient);
    ingredientsSection.classList.add("d-none");
  }
});

contactBtn.addEventListener("click", function () {
  // Display Contact Section
  contactSection.classList.remove("d-none");
  // Hide Search Section
  searchSection.classList.add("d-none");
  // Hide Content Section
  contentSection.classList.add("d-none");
  // Hide Details Section
  detailsSection.classList.add("d-none");
  // Hide Categories Section
  categoriesSection.classList.add("d-none");
  // Hide Area Section
  areaSection.classList.add("d-none");
  // Hide Ingredients Section
  ingredientsSection.classList.add("d-none");
  // Toggle side nav
  sideNavToggle();
});

userNameInput.addEventListener("input", function () {
  if (userNameReg.test(this.value)) {
    invalidName.classList.add("d-none");
    submit();
  } else {
    userNameMsg();
  }
});
emailInput.addEventListener("input", function () {
  if (emailReg.test(this.value)) {
    invalidEmail.classList.add("d-none");
    submit();
  } else {
    emailMsg();
  }
});
phoneInput.addEventListener("input", function () {
  if (phoneReg.test(this.value)) {
    invalidTel.classList.add("d-none");
    submit();
  } else {
    telMsg();
  }
});
ageInput.addEventListener("input", function () {
  if (ageReg.test(this.value)) {
    invalidAge.classList.add("d-none");
    submit();
  } else {
    ageMsg();
  }
});
passwordInput.addEventListener("input", function () {
  if (passwordReg.test(this.value)) {
    invalidPassword.classList.add("d-none");
    submit();
  } else {
    passMsg();
  }
});
rePasswordInput.addEventListener("input", function () {
  if (passwordReg.test(this.value)) {
    invalidRePassword.classList.add("d-none");
    submit();
  } else {
    rePassMsg();
  }
});
