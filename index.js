const secretPassword = "supersecretdiet2024";
const popup = document.getElementById("popup");
const formPassword = document.getElementById("formPassword");
const passwordInput = document.getElementById("pass");
const msgWrong = document.querySelector("small");


//RECIPES
const recipesUl = document.getElementById("recipes-list");
const selectEl = document.querySelector("select");

let selected = "wszystkie";

const chooseRecipes = () => {

  let chosen = recipes;

  if(selectEl.value !== "wszystkie") {
    chosen = recipes.filter(recipe => recipe.whichMeal === selectEl.value);
  }

  return chosen;
}

const displayRecipes = () => {

  recipesUl.innerHTML = "";

  chooseRecipes().forEach(recipe => {
    let recipeLi = document.createElement("li");

    let ingredientsTemplate = "";
    recipe.ingredients.forEach(ing => {
      let temp = `
      <li>
        ${ing.ingrName} 
        ${ing.amount ? " &rarr; " + ing.amount : ""}&nbsp;${ing.unit ? ing.unit : ""}
        ${ing.gram ? "(" + ing.gram + " g)" : ""}
        ${ing.ml ? "(" + ing.ml + " ml)" : ""}
      </li>`;

      ingredientsTemplate += temp;
    })

      let stepsTemplate = "";
    recipe.steps.forEach(step => {
      let temp = `
      <li>
        ${step}
      </li>`;

      stepsTemplate += temp;
    })

    let recipeTemplate = `
    <div>
      <img src=${recipe.imgSrc || "placeholder.jpg"} />
      <div class="main-info">
        <h2>${recipe.name}</h2>
        <p>${recipe.whichMeal}</p>
        <p>${recipe.kcal} kcal</p>
        <p>${recipe.time}</p>
      </div>
    </div>
    <hr/>
    <div class="scroll details">
      ${
        recipe.notes ? `
        <div>
          <h3>Dodatkowe informacje:</h3>
          <p class="add-info">
            ${recipe.notes}
          </p>
        </div>
        ` : ""
      }
      <div>
        <h3>Składniki:</h3>
        <ul class="ingredients">
          ${ingredientsTemplate}
        </ul>
      </div>
      <div>
        <h3>Kroki:</h3>
        <ol class="steps">
          ${stepsTemplate}
        </ol>
      </div>
    </div
    `
    recipeLi.innerHTML = recipeTemplate;
    recipesUl.appendChild(recipeLi);
  })
}

selectEl.addEventListener("change", displayRecipes);

//ACCESS LOGICS
if(localStorage.getItem("passed")) {
  popup.style.display = "none";
  displayRecipes();
}

formPassword.addEventListener("submit", e => {
  e.preventDefault();
  if(passwordInput.value === secretPassword) {
    localStorage.setItem('passed', "true");
    displayRecipes();
    popup.style.display = "none";
  }
  else {
    msgWrong.style.opacity = 1;
    passwordInput.value = "";
  }
})

// displayRecipes();