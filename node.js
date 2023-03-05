// Selecting DOM elements
const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit-btn");
const restartButton = document.getElementById("restart");
const scoreButton = document.getElementById("score");
const quizTitle = document.getElementById("quiz-title");
const quizInstructions = document.getElementById("quiz-instructions");
const quizQuestions = document.querySelectorAll(".quiz-Question");
const quizForm = document.getElementById("quiz-form");
const scoreDisplay = document.getElementById("Score");
const timerDisplay = document.getElementById("timer");

// Quiz data
const quizData = [
  {
    question: "What is JavaScript?",
    answers: [
      { text: "A scripting language used for creating interactive webpages", correct: true },
      { text: "A video game", correct: false },
      { text: "An indie movie", correct: false },
      { text: "A type of computer", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheet", correct: true },
      { text: "Crawling Sneaky Snakes", correct: false },
      { text: "Couch Sitting Sod", correct: false },
      { text: "Child Swinging Sounds", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HyperText Markup Log", correct: false },
      { text: "HyperText Markup Latitude", correct: false },
      { text: "HyperText Magic Language", correct: false },
    ],
  },
  {
    question: "What is HTML used for?",
    answers: [
      { text: "Web development", correct: true },
      { text: "Internet navigation", correct: false },
      { text: "Web documentation", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What can CSS do?",
    answers: [
      { text: "Change the color of text and backgrounds", correct: true },
      { text: "Control the layout of a webpage", correct: true },
      { text: "Create animations and transitions", correct: true },
      { text: "All of the above", correct: true },
    ],
  },
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerIntervalId;

// Function to start the quiz
function startQuiz() {
  // Hide quiz instructions and show quiz questions
  quizTitle.style.display = "none";
  quizInstructions.style.display = "none";
  quizQuestions[currentQuestionIndex].style.display = "block";

  // Start timer
  timerIntervalId = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Timer: ${timeLeft}`;

  if (timeLeft === 0) {
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  // Stop timer
  clearInterval(timerIntervalId);

  // Hide quiz questions and show score display
  function showQuestions () {
    questionContainers.forEachfunction('container') 
    {
     'container'.style.display ="block";
    }
  };

  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60
}