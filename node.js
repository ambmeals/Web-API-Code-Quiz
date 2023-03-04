var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var quizForm = document.getElementById("quiz-form");
var submitBtn = document.getElementById("submit");
var restartBtn = document.getElementById("restart");
var resultsEl = document.getElementById("results");
var scoreEl = document.getElementById("score");
var questionContainers = document.querySelectorAll(".quiz-question");
var secondsLeft = 60; // one minute quiz

// Function to start the timer
function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time remaining: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// Function to show all questions
function showQuestions() {
  questionContainers.forEach(function(container) {
    container.style.display = "block";
  });
}

// Function to end the quiz and show results
function endQuiz() {
  // Hide quiz form and timer
  quizForm.style.display = "none";
  timerEl.style.display = "none";

  // Calculate and display user score
  var numCorrect = 0;
  var userAnswers = new FormData(quizForm);
  for (var pair of userAnswers.entries()) {
    if (pair[1] === "a") {
      numCorrect++;
    }
  }
  var scorePercentage = Math.round((numCorrect / 5) * 100);
  scoreEl.textContent = "You scored " + scorePercentage + "%";
  resultsEl.style.display = "block";
}

// Event listener for start button click
startBtn.addEventListener("click", function() {
  // Hide start button and quiz instructions
  startBtn.style.display = "none";
  document.getElementById("quiz-instructions").style.display = "none";

  // Start timer and show questions
  startTimer();
  showQuestions();
});

// Event listener for submit button click
submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form from submitting
  endQuiz();
});

// Event listener for restart button click
restartBtn.addEventListener("click", function() {
  // Reset quiz and start over
  secondsLeft = 120;
  timerEl.textContent = "Time remaining: " + secondsLeft;
  quizForm.reset();
  resultsEl.style.display = "none";
  questionContainers.forEach(function(container) {
    container.style.display = "none";
  });
  startBtn.style.display = "block";
  document.getElementById("quiz-instructions").style.display = "block";
});