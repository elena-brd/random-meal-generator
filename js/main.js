const button = document.getElementById('get-meal');
const card = document.querySelector('.greet-card')

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.text())
    .then(data => getRandomMeal(data))

function getRandomMeal(meal) {
    const h3 = document.createElement('h3');
    h3.innerHTML = `${meal.strMeal}`
}

getRandomMeal()

button.addEventListener('click', getRandomMeal)



