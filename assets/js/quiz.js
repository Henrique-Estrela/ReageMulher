var banner_quiz = document.querySelector("#main-banner-quiz");
var btn_next = document.querySelector("#quiz-button-next");
var btn_end = document.querySelector("#quiz-button-end");
var quiz = [1, 2, 3, 4, 5, 6, 7];

var i = 0;

function next_query() {  
    if (i < quiz.length) {
        if (i > 0) {
            document.getElementById("query" + quiz[i - 1]).style.display = 'none';
        }
        if (i == (quiz.length-1)){
            btn_next.style.display = 'none';
            btn_end.style.display = 'block';
        }
        document.getElementById("query" + quiz[i]).style.display = 'block';
        i++
    } 
}

function Open_close_query() {
    banner_quiz.style.display = 'none';
    btn_next.style.display = 'block';
    next_query()
}

document.getElementById("quiz-button-next").addEventListener('click', function () {
        next_query()
});

document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault(); 
    window.location.href= "resultado.html";
});

document.getElementById("quiz-button-start").addEventListener('click', function () {
    Open_close_query();
});