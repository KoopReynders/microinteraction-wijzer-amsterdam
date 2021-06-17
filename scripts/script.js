const main = document.querySelector('main')
const trigger = document.querySelector('main i')
const card = document.querySelector('div.card')
const buttons = document.querySelectorAll('div.card button')

const observer = new IntersectionObserver(showChat, {rootMargin: '0px 0px 50px 0px',threshold: 0})

observer.observe(trigger) 

buttons.forEach(button => button.addEventListener('click', flip))

function showChat(entries, observer) { 
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      main.classList.add('observed')
    } else {
      main.classList.remove('observed')
    }
  });
};

function flip () {
  //card.classList.toggle('flipped')
  main.classList.add('flipped') //class op de main zodat de breedte van de card kan worden aangepast
}