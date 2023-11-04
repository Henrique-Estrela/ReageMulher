var banner_quiz = document.querySelector("#main-banner-quiz");

function Open_close_query() {
    banner_quiz.style.display = 'none';
    let quiz = ["1","2","3","4","5","6","7"];
    for (let i = 0; i < quiz.length; i++) {
        document.getElementById("query"+quiz[i]).style.display = 'block';
        if (indiceConteudoAtual < conteudos.length) {
            conteudos[indiceConteudoAtual].style.display = "none";
            indiceConteudoAtual++;
        }
    
        // Mostra o próximo conteúdo, se disponível
        if (indiceConteudoAtual < conteudos.length) {
            conteudos[indiceConteudoAtual].style.display = "block";
        } else {
            botaoProximo.disabled = true; // Desativa o botão quando todos os conteúdos foram exibidos
        }
    }
}


document.getElementById("quiz-button-start").addEventListener('click', function start() {
    Open_close_query();
});