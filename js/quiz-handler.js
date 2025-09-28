function openQuiz() {
    document.getElementById("quizOverlay").style.display = "flex";
}

function closeQuiz() {
    document.getElementById("quizOverlay").style.display = "none";
    document.getElementById("feedback").textContent = "";
}

function checkAnswer(choice) {
    const feedback = document.getElementById("feedback");
    if (choice === 'a') {
        feedback.textContent = "✅ Benar! Jarak = v × t = 10 × 5 = 50 m";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "❌ Salah, coba lagi!";
        feedback.style.color = "red";
    }
}