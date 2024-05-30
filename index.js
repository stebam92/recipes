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
      let temp;
      if (ing.group) {
        temp = `<h4>${ing.group}</h4>`;
      } else {
        temp = `
        <li>
          ${ing.ingrName} 
          ${ing.amount ? " &rarr; " + ing.amount : ""}&nbsp;${ing.unit ? ing.unit : ""}
          ${ing.gram ? "(" + ing.gram + " g)" : ""}
          ${ing.ml ? "(" + ing.ml + " ml)" : ""}
        </li>`;
      }

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

    let mom_color;
    let my_color;
    switch(recipe.mom) {
      case 0: mom_color = "bad"; break;
      case 1: mom_color = "ok"; break;
      case 2: mom_color = "good"; break;
      default: mom_color = "no-data";        
    }
     switch(recipe.me) {
      case 0: my_color = "bad"; break;
      case 1: my_color = "ok"; break;
      case 2: my_color = "good"; break;
      default: my_color = "no-data";        
    }

    let recipeTemplate = `
      <div>
        <img src=${recipe.imgSrc || "placeholder.jpg"} />
        <div class="main-info">
          <div>
            <h2>${recipe.name}</h2>
          </div>
          <div class="main-second">
            <div>
              <div class="circle ${mom_color}">R</div>
              <div class="circle ${my_color}">M</div>
            </div>
            <div>
              <p>${recipe.whichMeal}</p>
              <p>${recipe.kcal} kcal</p>
              <p>${recipe.time}</p>
            </div>
          </div>
          
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

// const toggleDetails = card => {
//   const hr = card.children[1];
//   const details = card.children[2];
//   // hr.classList.toggle("hide");
//   // details.classList.toggle("hide");
// }

// displayRecipes();