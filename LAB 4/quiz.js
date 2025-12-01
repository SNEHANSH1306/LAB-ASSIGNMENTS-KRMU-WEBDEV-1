// Quiz questions array
const quizQuestions = [
    { question: "Who was the first Prime Minister of INDIA?" , answer: "jawaharlal nehru"},
    { question: "Which is the molecular formula of 'Glucose'?" , answer: "c6h12o6"},
    { question: "Who was the person who discovered gravity?" , answer: "isaac newton"},
    { question: "Which planet is know as 'Green Planet' in the solar system?" , answer: "uranus"},
    { question: "Who is the founder of 'Microsoft'" , answer: "bill gates"}
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question); 

    if (!userAnswer) userAnswer = ""; 

    
    userAnswer = userAnswer.toLowerCase().trim();

    
    if (userAnswer === quizQuestions[i].answer) {
      alert("CORRECT!!!");
      score++;
    } else {
      alert(
        `Incorrect! \n The Correct Answer is: ${quizQuestions[i].answer}`
      );
    }
  }

  
  alert(`Quiz Over! \n Your final Score is: ${score} out of ${quizQuestions.length}`);
}


runQuiz();