const btn = document.querySelector('.btn');
const mealContent = document.getElementById('meal-content');
const container = document.querySelector('.container');

function getMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => createRandomMeal(data.meals[0]))
}

function createRandomMeal(meal) {
    const newInnerHTML = `
    <div class="about">
    <div class="title">
        <h3>${meal.strMeal}</h3>
    </div>
    <div class="intros">
        <p>${meal.strInstructions}</p>
    </div>
    </div>
    <div class="info">
    <img src="${meal.strMealThumb}" alt="">
    </div> `
    mealContent.innerHTML = newInnerHTML;
}
btn.addEventListener('click', getMeal);

getMeal();
