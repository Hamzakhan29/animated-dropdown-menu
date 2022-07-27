const drpButton = document.getElementsByClassName('caret-dropdown');
const companyDrp = document.getElementById('company-drp');
const featuresDrp = document.getElementById('features-drp');

const companyCaret = document.getElementById('company-caret');
const featuresCaret = document.getElementById('features-caret');

Array.from(drpButton).forEach(function(element) {
    console.log(element)
    element.addEventListener('click', toggleDropdowns);
  });

const burgerMenu = document.getElementById('burger-menu');
const overlayEl = document.getElementById('overlay');

overlayEl.addEventListener('click', ()=>{
    toggleBurgerMenu();
})
const closeBtn = document.getElementById('closeMenu');
const menuContent = document.getElementsByClassName('menu');

burgerMenu.addEventListener('click',toggleBurgerMenu);
closeBtn.addEventListener('click',toggleBurgerMenu);


function toggleBurgerMenu(event){
  overlayEl.classList.toggle('overlay-show');
  Array.from(menuContent)[0].classList.toggle('addWidth');
  closeBtn.classList.toggle('d-none')

}

function close(){
  overlayEl.classList.remove('overlay-show');
  Array.from(menuContent)[0].classList.remove('addWidth');
  closeBtn.classList.toggle('d-none')

}


const heroImg = document.getElementById('heroImg')
window.onload = () =>{
  if (window.innerWidth < 856) {
    heroImg.src = './images/image-hero-mobile.png';
}
}

function toggleDropdowns(event) {
  console.log('hellooo',event);
  if(event.target.innerText == 'Company'){
    companyDrp.classList.toggle('showup');
    if(companyDrp.classList.contains('showup'))
    {
        companyCaret.setAttribute('class','rotateThis');
        // companyCaret.src = "./images/icon-arrow-up.svg";
    }
    else{
        // companyCaret.src = "./images/icon-arrow-down.svg";
        companyCaret.removeAttribute('class','rotateThis');

    }
  }
  else if((event.target.innerText == 'Features')){
    featuresDrp.classList.toggle('showup');
    if(featuresDrp.classList.contains('showup'))
    {
        featuresCaret.setAttribute('class','rotateThis');
        // featuresCaret.src = "./images/icon-arrow-up.svg";
    }
    else{
        featuresCaret.removeAttribute('class','rotateThis');
        // featuresCaret.src = "./images/icon-arrow-down.svg";
    }
  }
  
}