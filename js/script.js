const modalOpen = document.querySelector('.booking-form-open');
const form = document.querySelector('.booking-form');
const searchButton = form.querySelector('.search');
const inputEntrance = form.querySelector('.input-entrance');
const inputExit = form.querySelector('.input-exit');
const inputAdults = form.querySelector('.input-adults');
const inputChilds = form.querySelector('.input-childs');

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("entrance");
    storage = localStorage.getItem("exit");
    storage = localStorage.getItem("adults");
} catch (err) {
    isStorageSupport = false;
}


modalOpen.addEventListener('click' , function() {
  form.classList.add("booking-form-show");
  inputEntrance.focus();
});

if (storage) {
    inputEntrance.value = storage; 
    inputExit.focus();
}    
if (storage) {
    inputExit.value = storage;
    inputAdults.focus();
} else {
    inputEntrance.focus();
}

window.addEventListener('keydown' , function(evt) {
     if (evt.keyCode === 27) {
     form.classList.remove("booking-form-show");
     form.classList.remove("booking-form-error");
 };          
});

form.addEventListener("submit", function(evt) {
  if (!inputEntrance.value || !inputExit.value || !inputAdults.value) {
  evt.preventDefault();
  form.classList.remove("booking-form-error");
  form.offsetWidth = form.offsetWidth;
  form.classList.add("booking-form-error");
  
} else {
    if (isStorageSupport) {
    localStorage.setItem("entrance", inputEntrance.value);
    localStorage.setItem("exit", inputExit.value);
    localStorage.setItem("adults", inputAdults.value);
    }
}
})

