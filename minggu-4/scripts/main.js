let isDarkMode = false;

const container = document.getElementsByClassName('container')[0];
const toggler = document.getElementById('toggler');
const texts = document.querySelectorAll('[data-texts]');
const infos = document.querySelectorAll('[data-info]');

function changeClassName(el) {
  const elClsNames = el.className.split(' ');

  if (isDarkMode) {
    elClsNames.pop();

    el.className = elClsNames.join(' ');
  } else {
    elClsNames.push('dark-mode');

    el.className = elClsNames.join(' ');
  }
}

function changeMode() {
  changeClassName(container);
  texts.forEach(changeClassName);
  infos.forEach(changeClassName);

  isDarkMode = !isDarkMode;
}

toggler.addEventListener('click', changeMode);
