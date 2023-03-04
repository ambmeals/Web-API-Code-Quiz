const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function() {
  alert('The quiz has started!');
  startButton.style.backgroundColor = "red";
});
