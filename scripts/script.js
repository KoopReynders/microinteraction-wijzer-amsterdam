const main = document.querySelector('main')
const chat = document.querySelector('#chat iframe')
const card = document.querySelector('div.card')
const buttons = document.querySelectorAll('div.card button')

const observer = new IntersectionObserver(showChat)

observer.observe(chat) 

buttons.forEach(button => button.addEventListener('click', flip))

function showChat(entries, observer) { 
  console.log("observer", entries);

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