const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');

function removeClose() {
  modalWindow.classList.remove('close');
}

function addClose() {
  modalWindow.classList.add('close');
  document.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}

buttonsModal.forEach((item) => {
  item.addEventListener('click', removeClose);
});

modalWindow.addEventListener('click', addClose);