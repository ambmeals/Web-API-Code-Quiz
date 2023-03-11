const startButton = document.getElementById("start-button");
const quizScreen = document.getElementById("quiz-screen");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const scoreElement = document.getElementById("score");
const initialsElement = document.getElementById("initials");
const submitScoreButton = document.getElementById("submit-score");

let currentQuestionIndex = 0;
let secondsLeft = 60;
let score = 0;
let timerInterval;

const questions = [
  {
    question: "What is JavaScript?",
    choices: [
      "A markup language",
      "A programming language",
      "A database language",
      "A scripting language"
    ],
    answer: "A programming language"
  },
  {
    question: "What is the result of 1 + '1'?",
    choices: [
      "11",
      "2",
      "NaN",
      "SyntaxError"
    ],
    answer: "11"
  },
  {
    question: "What does the DOM stand for?",
    choices: [
      "Document Object Model",
      "Digital Object Memory",
      "Data Object Model",
      "Document Oriented Memory"
    ],
    answer: "Document Object Model"
  },
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    choices: [
      "var x;",
      "variable x;",
      "v x;",
      "x = var;"
    ],
    answer: "var x;"
  },
  {
    question: "What is a callback function?",
    choices: [
      "A function that is called automatically",
      "A function that calls another function",
      "A function that is passed as an argument to another function",
      "A function that returns another function"
    ],
    answer: "A function that is passed as an argument to another function"
  }
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  // Hide start screen and show quiz screen
  document.getElementById("start-screen").classList.add("hidden");
  quizScreen.classList.remove("hidden");

  // Start timer
  timerInterval = setInterval(function() {
    secondsLeft--;
    if (secondsLeft === 0) {
      endQuiz();
    } else {
      document.getElementById("timer").textContent = secondsLeft;
    }
  }, 1000);

  // Display first question
  displayQuestion();
}

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  choicesElement.innerHTML = "";
  question.choices.forEach(function(choice) {
    const button = document.createElement("button");
    button.classList.add("choice");
    button.textContent = choice;
    button.addEventListener("click", function() {
      if (choice === question.answer) {
        // Increase score by 10
        score += 10;
        scoreElement.textContent = score;
      } else {
        // Deduct 10 seconds from timer
        secondsLeft -= 10;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
        endQuiz();
      } else {
        displayQuestion();
      }
    });
    choicesElement.appendChild(button);
  });
}

function endQuiz() {
  // Stop timer
  clearInterval(timerInterval);

  // Hide quiz screen and show end screen
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");

  // Display final score
  scoreElement.textContent = score;
}

function submitScore(event) {
  event.preventDefault();

  // Get initials from input
  const initials = initialsElement.value.trim();

  // Get scores from local storage or create new array
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add new score to array
  highScores.push({
    initials: initials,
    score: score
  });

  // Sort high scores by score in descending order
  highScores.sort(function(a, b) {
    return b.score - a.score;
  });

  // Store high scores in local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Redirect to high scores page
  window.location.href = "highscores.html";
}

submitScoreButton.addEventListener("click", submitScore);