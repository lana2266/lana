

const apiKey = '0e038ff2563e4d47a5854073fba118b9'; 
const apiUrl = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`;

async function fetchRecipes() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); 
        }
        const data = await response.json();
        displayRecipes(data.recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        document.getElementById('recipes-container').innerHTML = `<p>Failed to load recipes. Please try again.</p>`; // Fixed HTML string
    }
}

function displayRecipes(recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
            </div>
        `;
        container.innerHTML += recipeCard; 
    });
}

fetchRecipes();

