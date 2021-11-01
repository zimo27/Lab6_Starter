// main.js

// Here is where the recipes that you will fetch.
// Feel free to add your own here for part 2, if they are local files simply add their path as a string.
const recipes = [
  'https://introweb.tech/assets/json/ghostCookies.json',
  'https://introweb.tech/assets/json/birthdayCake.json',
  'https://introweb.tech/assets/json/chocolateChip.json',
  "assets/recipes/ch1.json",
  "assets/recipes/ch2.json",
  "assets/recipes/ch3.json"
];

// Once all of the recipes that were specified above have been fetched, their
// data will be added to this object below. You may use whatever you like for the
// keys as long as it's unique, one suggestion might but the URL itself
const recipeData = {}

window.addEventListener('DOMContentLoaded', init);

// This is the first function to be called, so when you are tracing your code start here.
async function init() {
  // fetch the recipes and wait for them to load
  let fetchSuccessful = await fetchRecipes();
  // if they didn't successfully load, quit the function
  if (!fetchSuccessful) {
    console.log('Recipe fetch unsuccessful');
    return;
  };
  // Add the first three recipe cards to the page
  //console.log(recipeData);
  createRecipeCards();
  // Make the "Show more" button functional
  bindShowMore();
}

async function fetchRecipes() {
  return new Promise((resolve, reject) => {
    // This function is called for you up above
    // From this function, you are going to fetch each of the recipes in the 'recipes' array above.
    // Once you have that data, store it in the 'recipeData' object. You can use whatever you like
    // for the keys. Once everything in the array has been successfully fetched, call the resolve(true)
    // callback function to resolve this promise. If there's any error fetching any of the items, call
    // the reject(false) function.

    // For part 2 - note that you can fetch local files as well, so store any JSON files you'd like to fetch
    // in the recipes folder and fetch them from there. You'll need to add their paths to the recipes array.

    // Part 1 Expose - TODO

    for (let i = 0; i<6;i++) {
      fetch(recipes[i])
      .then(response => response.json())
      .then(data => {
        recipeData[recipes[i]] = data;
        //console.log(recipeData[`recipe${i}`]);
        // if (i == 2 && Object.keys(recipeData).length == recipes.length)  {
        //   resolve(true);
        // } 
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        reject(false);
      });
      setTimeout(() => { resolve(true)},300);

    }
    
  });
}

function createRecipeCards() {
  // This function is called for you up above.
  // From within this function you can access the recipe data from the JSON 
  // files with the recipeData Object above. Make sure you only display the 
  // three recipes we give you, you'll use the bindShowMore() function to
  // show any others you've added when the user clicks on the "Show more" button.

  // Part 1 Expose - TODO
  // console.log(recipeData[])
  for (let i = 0; i<6; i++) {
    //console.log(recipeData);
    const txt = recipes[i];
    //console.log(recipeData[txt]);
    let x = document.createElement('recipe-card');
    let mn = document.querySelector('main');
    x.data = recipeData[recipes[i]];
    mn.appendChild(x);
     
    // console.log("h");
  }
}

function bindShowMore() {
  // This function is also called for you up above.
  // Use this to add the event listener to the "Show more" button, from within 
  // that listener you can then create recipe cards for the rest of the .json files
  // that were fetched. You should fetch every recipe in the beginning, whether you
  // display it or not, so you don't need to fetch them again. Simply access them
  // in the recipeData object where you stored them/

  // Part 2 Explore - TODO
  const button = document.querySelector('button');

  button.addEventListener('click', (e) => {
    for (let i = 3; i<6;i++) {
      fetch(recipes[i])
      .then(response => response.json())
      .then(data => {
        recipeData[recipes[i]] = data;
        //console.log(recipeData[`recipe${i}`]);
        // if (i == 2 && Object.keys(recipeData).length == recipes.length)  {
        //   resolve(true);
        // } 
      })
      // .catch((error) => {
      //   console.error('Error fetching recipes:', error);
      //   reject(false);
      // });
      setTimeout(() => { },300);
      console.log("h");

    }
    console.log(recipes[3]);
    console.log(recipeData);

    for (let i = 3; i<6; i++) {
      //console.log(recipeData);
      const txt = recipes[i];
      //console.log(recipeData[txt]);
      let x = document.createElement('recipe-card');
      let mn = document.querySelector('main');
      x.data = recipeData[recipes[i]];
      mn.appendChild(x);
       
      //console.log("h");
    }

  });
}