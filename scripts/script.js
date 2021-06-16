const main = document.querySelector('main');
const chat = document.querySelector('#chat iframe')
const observer = new IntersectionObserver(showChat);

observer.observe(chat) 

function showChat(entries, observer) { 
  entries.forEach(entry => {
    if(entry.isIntersecting) {
        console.log(1)
      main.classList.add('observed')
    } else {
      main.classList.remove('observed')
    }
  });
};