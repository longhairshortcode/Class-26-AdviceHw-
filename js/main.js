/*
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

*/


// document.querySelector('button').addEventListener('click', getAdvice)

//  function getAdvice(){
    
//     fetch('	https://api.adviceslip.com/advice')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.slip)
//         document.querySelector('h3').innerText = data.slip.advice
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }


document.querySelector('button').addEventListener('click', getAdvice);

async function getAdvice() {
    try {
        // Fetch advice data
        const adviceResponse = await fetch('https://api.adviceslip.com/advice');
        const adviceData = await adviceResponse.json();
        
        // Update advice text
        document.querySelector('h3').innerText = adviceData.slip.advice;

        // Fetch image data from the cat image API
        const imageResponse = await fetch('https://api.thecatapi.com/v1/images/search');
        const imageData = await imageResponse.json();

        // Update image source
        const imageElement = document.querySelector('img');
        imageElement.src = imageData[0].url;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}





