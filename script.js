const quizData = [
    {
      question: "What does JS stand for?",
      choiceA: "Java Syntax",
      choiceB: "Java System",
      choiceC: "JavaScript",
      choiceD: "Java Solution",
      correct: "C",
    },
    {
      question:
        'What is the correct syntax for referring to an external script called "script.js"?',
      choiceA: '<script href="script.js"></script>',
      choiceB: '<script src="script.js"></script>',
      choiceC: '<script link="script.js"></script>',
      choiceD: '<script type="text/javascript" src="script.js"></script>',
      correct: "B",
    },
    {
      question: "Which built-in method returns the length of the string?",
      choiceA: "length()",
      choiceB: "size()",
      choiceC: "index()",
      choiceD: "None of the above",
      correct: "A",
    },
    {
      question: "Which statement is used to jump out of a loop?",
      choiceA: "return",
      choiceB: "break",
      choiceC: "continue",
      choiceD: "exit",
      correct: "B",
    },
    {
        question: "What is the difference between the == operator and the === operator in JavaScript?",
        choiceA: "They are equivalent and can be used interchangeably",
        choiceB: "The == operator checks for value equality, while the === operator checks for both value and type equality",
        choiceC: "The === operator checks for value equality, while the == operator checks for both value and type equality",
        choiceD: "The == operator is used for assignment, while the === operator is used for comparison",
        correct: "B",
    },
  ];
  
  const container = document.querySelector(".container");
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const progressEl = document.getElementById("quiz-progress");
  const scoreEl = document.getElementById("score");
  const choiceButtons = Array.from(choicesEl.getElementsByTagName("button"));
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion(questionIndex) {
    const currentQuestion = quizData[questionIndex];
    questionEl.innerText = currentQuestion.question;
    choiceButtons.forEach((button, index) => {
      button.innerText = currentQuestion[`choice${String.fromCharCode(65 + index)}`];
    });
  }
  
  function checkAnswer(selectedChoice) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correct) {
      score++;
      scoreEl.textContent = `Score: ${score}`;
    }
  }
  
  function showProgress() {
    progressEl.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  }
  
  function endQuiz() {
    container.innerHTML = `
          <h2>Your score is ${score}/${quizData.length}</h2>
          <button onclick="location.reload()">Restart Quiz</button>
      `;
  }
  
  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      checkAnswer(button.id);
      currentQuestionIndex++;
      if (currentQuestionIndex === quizData.length) {
        endQuiz();
      } else {
        showQuestion(currentQuestionIndex);
        showProgress();
      }
    });
  });
  
  showQuestion(currentQuestionIndex);
  showProgress();
  