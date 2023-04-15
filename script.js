document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const nextBtn = document.getElementById('next-btn');
  
    const questions = [
      {
        question: 'What is the capital of France?',
        answers: ['Paris', 'Berlin', 'Rome', 'Madrid'],
        correct: 'Paris'
      },
      {
        question: 'What is 2 + 2?',
        answers: ['4', '5', '6', '7'],
        correct: '4'
      },
      {
        question: 'Who is the best Basketball Player?',
        answers: ['Jordan', 'Lebron', 'GIannis', 'Kobe'],
        correct: 'Jordan'
      },
      {
        question: 'What is 8 x 8?',
        answers: ['56', '64', '81', '70'],
        correct: '64'
      },
    ];
  
    let currentQuestionIndex = 0;
    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
          <div class="question">${question.question}</div>
          <div class="answers">
            ${question.answers
              .map((answer, index) => `<div class="answer" data-index="${index}">${answer}</div>`)
              .join('')}
          </div>
        `;
    
        const answers = document.querySelectorAll('.answer');
        answers.forEach((answer) => {
          answer.addEventListener('click', handleAnswerClick);
        });
    
        nextBtn.style.display = 'none';
      }
    
      function handleAnswerClick(e) {
        const selectedAnswer = e.target;
        const correctAnswer = questions[currentQuestionIndex].correct;
        const isCorrect = selectedAnswer.textContent === correctAnswer;
    
        if (isCorrect) {
          selectedAnswer.classList.add('correct');
        } else {
          selectedAnswer.classList.add('wrong');
        }
    
        nextBtn.style.display = 'inline-block';
      }
    
      function moveToNextQuestion() {
        currentQuestionIndex++;
    
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          // Display final score or a "Quiz Complete" message
          questionContainer.innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Refresh the page to try again.</p>
          `;
          nextBtn.style.display = 'none';
        }
      }
    
      nextBtn.addEventListener('click', moveToNextQuestion);
    
      showQuestion();
    });
      