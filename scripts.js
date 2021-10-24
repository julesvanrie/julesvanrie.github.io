function animateMenuButton(element) {
  element.classList.toggle("change");
  menu = document.getElementById("menu")
  if(menu.style.display === 'none') {
    menu.style.setProperty('display', 'block');
  } else {
    menu.style.setProperty('display', 'none');
  }
}

function changeColor() {
  mySheet = document.styleSheets[0];
  document.documentElement.style.setProperty('--my-bg-color', 'blue');
  document.documentElement.style.setProperty('--my-bg-color', 'green');
}
