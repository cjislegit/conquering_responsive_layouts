let nav = document.getElementsByClassName('nav')[0];
console.log(nav);

let menuClick = () => {
  nav.classList.toggle('nav--visible');
  nav.classList.toggle('nav');
};
