const main = document.querySelector('main')
const card = document.querySelector('div.card')
const button = document.querySelector('div.card button')

const observerOptions = {
  rootMargin: '0px 0px -50% 0px',
  threshold: 0,
}
const observer = new IntersectionObserver(showChat,observerOptions)
observer.observe(card) 
function showChat(entries) { 
  entries.map((entry) => {
    if(entry.isIntersecting) {
      // console.log("isIntersecting")
      main.classList.add('observed')
    } else {
      main.classList.remove('observed')
    }
  });
};

button.addEventListener('click', flip);
function flip () {
  //card.classList.toggle('flipped')
  main.classList.add('flipped') //class op de main zodat de breedte van de card kan worden aangepast
}