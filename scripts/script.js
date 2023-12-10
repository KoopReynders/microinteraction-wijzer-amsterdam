//1 - Selecteren van een element
const button = document.querySelector('div.card button')
const card = document.querySelector('div.card')

//2 - Luisteren naar een gebruikers event
button.addEventListener('click', function() {
  //3 - Koppelen van een actie met classlist en CSS 
  card.classList.toggle('flipped')
});