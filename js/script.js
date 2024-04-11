const hum = document.querySelector('.hum');
const menu = document.querySelector('.list-nav');
hum.addEventListener('click', function(){
    this.classList.toggle('close');
    menu.classList.toggle('open');
})


