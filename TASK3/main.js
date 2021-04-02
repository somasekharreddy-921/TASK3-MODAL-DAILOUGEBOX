// Get DOM Elements
const modal = document.querySelector('#modaldailouge');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
let btnClose =document.querySelector('#closebtn');
let btnModal=document.querySelector('#modaldailouge');


modalBtn.addEventListener('click', openModal);
btnModal.addEventListener('click',close);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
btnClose.addEventListener('click',()=>{
  close();
});

// Open
function openModal() {
  modal.style.display = 'block';
}


// Close
function closeModal() {
  modal.style.display = 'none';
}

  


// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
