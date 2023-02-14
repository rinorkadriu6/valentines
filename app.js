// JavaScript
const myDiv = document.getElementById('myDiv');
const noButton = document.getElementById('noButton');

noButton.addEventListener('click', () => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const newTop = Math.floor(Math.random() * (windowHeight - myDiv.offsetHeight));
  const newLeft = Math.floor(Math.random() * (windowWidth - myDiv.offsetWidth));
  myDiv.style.top = `${newTop}px`;
  myDiv.style.left = `${newLeft}px`;
});
