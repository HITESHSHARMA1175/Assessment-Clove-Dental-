document.getElementById("consultForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! We will contact you shortly.");
});



// frequently ask ques

document.querySelectorAll('.faq-question').forEach((question) => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });

 
    document.querySelectorAll('.plus').forEach(plus => {
      plus.addEventListener('click', function () {
        const details = this.parentElement.nextElementSibling;
        details.classList.toggle('show');
        this.textContent = this.textContent === '+' ? '−' : '+';
      });
    });
