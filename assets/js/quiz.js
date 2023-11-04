var banner_quiz = document.querySelector("#main-banner-quiz");
var btn_next = document.querySelector("#quiz-button-next");
var quiz = [1, 2, 3, 4, 5, 6, 7];

var i = 0;

function next_query() {  
    if (i < quiz.length) {
        if (i > 0) {
            document.getElementById("query" + quiz[i - 1]).style.display = 'none';
        }
        document.getElementById("query" + quiz[i]).style.display = 'block';
        i++
    } else {
        btn_next.style.display = 'none';
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

document.getElementById("quiz-button-start").addEventListener('click', function () {
    Open_close_query();
});