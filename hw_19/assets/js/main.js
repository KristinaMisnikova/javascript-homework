let container = null;
let prevIndicator = null;

function createContainer() {
 elem = document.createElement('div');
 elem.setAttribute('id','carousel');
 elem.setAttribute('class','carousel');
 document.querySelector('body').appendChild(elem);
 container = document.querySelector('#carousel');
 
}
function createSlides(n) {
  slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class','slides');
  
  for (i = 0; i < n; i++) {
    slidesItem = document.createElement('li');
    slidesLink = document.createElement('a');

    if (i === 0) {
      slidesItem.setAttribute('class', 'slides__item active');
      }
      else {
        slidesItem.setAttribute('class', 'slides__item');
      }

    slidesItem.appendChild(slidesLink);
    slidesContainer.appendChild(slidesItem);
    slidesLink.setAttribute('href','#');    
  }
  container.appendChild(slidesContainer);  
}

function createIndicators(n) {
   indicatorsContainer = document.createElement('div');
   indicatorsContainer.setAttribute('class','indicators');  

   for (i = 0; i < n; i++) {
    indicatorsItem = document.createElement('span');

    if (i === 0) {
      indicatorsItem.setAttribute('class', 'indicators__item active');
      }
      else {
        indicatorsItem.setAttribute('class', 'indicators__item');
      }

    indicatorsItem.setAttribute('data-slide-to', i);
    indicatorsContainer.appendChild(indicatorsItem);    
  }
  container.appendChild(indicatorsContainer);
  
}

function createControls() {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class','controls');
  for (i = 0; i < 3; i++) {
    controlsItem = document.createElement('div');
    controlsIcon = document.createElement('i');
    divItem = 'controls__item';
    divIcon = 'fas'

    switch (i){
      case 0: 
         controlsItem.setAttribute('class', `${divItem} controls__prev`);
         controlsIcon.setAttribute('class', `${divIcon} fa-chevron-left`);      
      break;
      case 1:
        controlsItem.setAttribute('class', `${divItem} controls__next`);
        controlsIcon.setAttribute('class', `${divIcon} fa-chevron-right`);
      break;
      case 2:
        controlsItem.setAttribute('class', `${divItem} controls__pause`);
        controlsIcon.setAttribute('class', `${divIcon} fa-play`);
      break;

    }

    controlsItem.appendChild(controlsIcon);
    controlsContainer.appendChild(controlsItem);
  }
  container.appendChild(controlsContainer);  
}
function createStyle() {
  styleContainer = document.createElement('style');
  let style = `
    .controls,
    .slides {
      position: relative;
    }
    .indicators {
      display: flex;
    }
    .indicators__item {
      display: block;
      width: 15px;
      height: 15px;
      margin: 7px;      
      background-color: #d0d0d0;
    }`;
    styleContainer.innerHTML = style;
    container.appendChild(styleContainer);
  }

  function indicatorsHandler(e) {
    let target = e.target;
  
    if (target.classList.contains('indicators__item')) {
      target.style.backgroundColor = 'red';
  
      if (prevIndicator !== null) prevIndicator.removeAttribute('style');
  
      prevIndicator = target;
    }
  }
  
  function setListener() {
    let indicatorsContainer = document.querySelector('div.indicators');
  
    indicatorsContainer.addEventListener('click', indicatorsHandler);
  }
  
function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  // createContainer();
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener(); 
}

createCarousel(4);