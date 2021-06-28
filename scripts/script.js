const main = document.querySelector('main')
// const trigger = document.querySelector('main i')
const card = document.querySelector('div.card')
const buttons = document.querySelectorAll('div.card button')

const options = {
  rootMargin: '0px 0px -50% 0px',
  threshold: 0,
}
const observer = new IntersectionObserver(showChat,options)
observer.observe(card) 

buttons.forEach(button => button.addEventListener('click', flip))

function showChat(entries) { 
  entries.map((entry) => {
    if(entry.isIntersecting) {
      console.log("isIntersecting")
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