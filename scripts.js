function changeColor() {
  mySheet = document.styleSheets[0];
  document.documentElement.style.setProperty('--my-bg-color', 'blue');
  document.documentElement.style.setProperty('--my-bg-color', 'green');
}
