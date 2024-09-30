// Array of quiz questions
const questions = [
    {
      question: "Who said, 'Why so serious?'",
      options: ["Batman", "Joker", "Harvey Dent", "Lucius Fox"],
      answer: "Joker"
    },
    {
      question: "What vehicle does Batman ride after the Batmobile is destroyed?",
      options: ["Batpod", "Batwing", "Tumbler", "Batmobile"],
      answer: "Batpod"
    },
    {
      question: "Who plays the Joker in The Dark Knight?",
      options: ["Christian Bale", "Aaron Eckhart", "Heath Ledger", "Tom Hardy"],
      answer: "Heath Ledger"
    },
    {
      question: "What was Harvey Dent's position in Gotham?",
      options: ["Mayor", "Police Commissioner", "District Attorney", "Detective"],
      answer: "District Attorney"
    },
    {
      question: "What does Two-Face use to make his decisions?",
      options: ["A dice", "A coin", "A knife", "A gun"],
      answer: "A coin"
    },
    {
      question: "Who says, 'Some men just want to watch the world burn'?",
      options: ["Lucius Fox", "Alfred Pennyworth", "Batman", "Rachel Dawes"],
      answer: "Alfred Pennyworth"
    },
    {
      question: "What is the Joker’s real name?",
      options: ["Arthur Fleck", "Jack Napier", "He has no real name", "Jerome Valeska"],
      answer: "He has no real name"
    },
    {
      question: "How does the Joker escape the police station?",
      options: ["In a police car", "Blows up the station", "Dresses as a cop", "With a bomb hidden in a thug"],
      answer: "With a bomb hidden in a thug"
    },
    {
      question: "Which character says, 'The night is darkest just before the dawn'?",
      options: ["Joker", "Rachel Dawes", "Harvey Dent", "James Gordon"],
      answer: "Harvey Dent"
    },
    {
      question: "Who helps Bruce Wayne with his technology and gadgets?",
      options: ["Alfred", "Lucius Fox", "Rachel Dawes", "Jim Gordon"],
      answer: "Lucius Fox"
    }
  ];
  // Quiz state variables
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedQuestions = [];
  let selectedOption = null;
  let selectedOptionElement = null;
  function randomizeQuestions() {
    selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
  }
  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    questionContainer.innerHTML = selectedQuestions[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";
    selectedQuestions[currentQuestionIndex].options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.className = "option";
      optionElement.innerHTML = option;
      optionElement.onclick = () => selectOption(optionElement, option); // Pass the option element and value
      optionsContainer.appendChild(optionElement);
    });
  }
  function selectOption(optionElement, optionValue) {
    selectedOption = optionValue;
   
    if (selectedOptionElement) {
      selectedOptionElement.classList.remove("selected");
    }
    optionElement.classList.add("selected");
    selectedOptionElement = optionElement; 
  }
  function nextQuestion() {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }
    if (selectedOption === selectedQuestions[currentQuestionIndex].answer) {
      score++;
    }
    selectedOption = null;
    selectedOptionElement = null;
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").innerText = score;
  
    const fanLevel = document.getElementById("fan-level");
    if (score === 10) {
      fanLevel.innerText = "You are a true Dark Knight fan!";
    } else if (score >= 7) {
      fanLevel.innerText = "You're a big fan!";
    } else if (score >= 4) {
      fanLevel.innerText = "You know a bit about The Dark Knight!";
    } else {
      fanLevel.innerText = "You might want to rewatch the movie!";
    }
  }
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    randomizeQuestions();
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
  }
  randomizeQuestions();
  loadQuestion();
  