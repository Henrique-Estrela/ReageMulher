
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

function calcularProfissao(respostas) {
    const profissoes = {
      'Tecnologia e Desenvolvimento': 0,
      'Marketing e Mídia Digital': 0,
      'Consultoria Empresarial': 0,
      'Arte, Design e Criatividade': 0,
      'Saúde e Bem-Estar': 0,
    };
  
    // Pergunta 1
    if(respostas[0] <= 5){
      profissoes['Tecnologia e Desenvolvimento'] += respostas[0];
      profissoes['Marketing e Mídia Digital'] += respostas[0];
    }else{
      profissoes['Arte, Design e Criatividade'] += respostas[0];
      profissoes['Consultoria Empresarial'] += respostas[0];
      profissoes['Saúde e Bem-Estar'] += respostas[0];
    }
  
    // Pergunta 2
    switch (respostas[1]) {
      case 'a':
        profissoes['Arte, Design e Criatividade']++;
        break;
      case 'b':
        profissoes['Consultoria Empresarial']++;
        profissoes['Marketing e Mídia Digital']++;
        break;
      case 'c':
        profissoes['Tecnologia e Desenvolvimento']++;
        profissoes['Saúde e Bem-Estar']++;
        break;
    }
  
    // Pergunta 3
    switch (respostas[2]) {
      case 'a':
        profissoes['Tecnologia e Desenvolvimento']++;
        break;
        case 'b':
        profissoes['Consultoria Empresarial']++;
        break;
      case 'c':
        profissoes['Saúde e Bem-Estar']++;
        profissoes['Arte, Design e Criatividade']++;
        break;
      case 'd':
        profissoes['Marketing e Mídia Digital']++;
        break;
    }
  
   
  
    // Pergunta 4
    switch (respostas[3]) {
      case 'a':
        profissoes['Consultoria Empresarial']++;
        profissoes['Marketing e Mídia Digital']++;
        break;
      case 'b':
        profissoes['Tecnologia e Desenvolvimento']++;
        profissoes['Arte, Design e Criatividade']++;
        break;
      case 'c':
        profissoes['Marketing e Mídia Digital']++;
        profissoes['Saúde e Bem-Estar']++;
        profissoes['Arte, Design e Criatividade']++;
        break;
    }
  
    // Pergunta 5
    switch (respostas[4]) {
      case 'a':
        profissoes['Consultoria Empresarial']++;
        profissoes['Marketing e Mídia Digital']++;
        break;
      case 'b':
        profissoes['Consultoria Empresarial']++;
        break;
      case 'c':
        profissoes['Tecnologia e Desenvolvimento']++;
        profissoes['Marketing e Mídia Digital']++;
        break;
      case 'd':
        profissoes['Saúde e Bem-Estar']++;
        profissoes['Arte, Design e Criatividade']++;
        break;
    }
  
    // Nova Pergunta 6
    switch (respostas[5]) {
      case 'a':
        profissoes['Consultoria Empresarial']++;
        profissoes['Tecnologia e Desenvolvimento']++;
        break;
      case 'b':
        profissoes['Arte, Design e Criatividade']++;
        break;
      case 'c':
        profissoes['Marketing e Mídia Digital']++;
        profissoes['Saúde e Bem-Estar']++;
        break;
      
    }
  
    // Nova Pergunta 7
    switch (respostas[6]) {
      case 'a':
        profissoes['Consultoria Empresarial']++;
        break;
      case 'b':
        profissoes['Tecnologia e Desenvolvimento']++;
        profissoes['Saúde e Bem-Estar']++;
        profissoes['Arte, Design e Criatividade']++;
        break;
      case 'c':
        profissoes['Marketing e Mídia Digital']++;
        break;
    }
  
    // Encontrar a profissão com mais pontos
    let profissaoMaisApropriada = '';
    let pontuacaoMaisAlta = -1;
  
    for (const profissao in profissoes) {
      if (profissoes[profissao] > pontuacaoMaisAlta) {
        pontuacaoMaisAlta = profissoes[profissao];
        profissaoMaisApropriada = profissao;
      }
    }
  
    return profissaoMaisApropriada;
}

function getinput() {
    // Array para armazenar as respostas
    const respostas = [];
  
    // Pergunta 1
    const pergunta1Resposta = document.getElementById('range-quiz');
    if (pergunta1Resposta) {
      const selectedValue = parseInt(pergunta1Resposta.value, 10);
      if (!isNaN(selectedValue)) {
        const roundedValue = Math.round(selectedValue / 10) ; // Arredonda para o múltiplo de 10 mais próximo
        respostas.push(roundedValue);
      }
    }
    // Pergunta 2
    const pergunta2Resposta = document.querySelector('input[name="query2"]:checked');
    if (pergunta2Resposta) {
      respostas.push(pergunta2Resposta.value);
    }
  
    // Pergunta 3
    const pergunta3Resposta = document.querySelector('input[name="query3"]:checked');
    if (pergunta3Resposta) {
      respostas.push(pergunta3Resposta.value);
    }
  
    // Pergunta 4
    const pergunta4Resposta = document.querySelector('input[name="query4"]:checked');
    if (pergunta4Resposta) {
      respostas.push(pergunta4Resposta.value);
    }
  
    // Pergunta 5
    const pergunta5Resposta = document.querySelector('input[name="query5"]:checked');
    if (pergunta5Resposta) {
      respostas.push(pergunta5Resposta.value);
    }
  
    // Pergunta 6
    const pergunta6Resposta = document.querySelector('input[name="query6"]:checked');
    if (pergunta6Resposta) {
      respostas.push(pergunta6Resposta.value);
    }
    // Pergunta 7
    const pergunta7Resposta = document.querySelector('input[name="query7"]:checked');
    if (pergunta7Resposta) {
      respostas.push(pergunta7Resposta.value);
    }
  
    return respostas
}
  
document.getElementById("quiz-button-next").addEventListener('click', function () {
    next_query();
});

document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const respostas = getinput();
    var profissaoRecomendada = calcularProfissao(respostas);
    var textResult = document.getElementById("text-result");
    var imgResult = document.getElementById("img-result");

    document.getElementById('profissao-sugerida').textContent = profissaoRecomendada;

    switch (profissaoRecomendada) {
        case "Tecnologia e Desenvolvimento":
            textResult.textContent = "A vida é uma jornada repleta de desafios e oportunidades. Lembre-se de que cada obstáculo que você enfrenta é uma chance de crescimento. Acredite em si mesmo, mantenha sua determinação e nunca desista dos seus sonhos. O caminho pode ser íngreme, mas as recompensas no topo valem a pena. Mantenha-se positivo, persista e conquiste o mundo com sua determinação.";
            imgResult.src = "assets/images/result/tecnologia-e-desenvolvimento.png";
            break;
    
        case "Marketing e Mídia Digital":
            textResult.textContent = "Marketing e Mídia Digital são os trampolins para criar conexões poderosas e contar histórias envolventes. Na era digital, você tem o mundo como audiência. Sua criatividade é a chave e sua paixão é o combustível. Abrace as oportunidades, esteja aberto a aprender constantemente e veja o sucesso como uma jornada emocionante, não apenas um destino. O ciberespaço é seu campo de jogo. Vá lá e brilhe!";
            imgResult.src = "assets/images/result/Business-Plan-bro.png";
    
            break;
        case "Saúde e Bem-Estar":
            textResult.textContent = "Sua saúde é seu ativo mais valioso. Cada passo em direção ao bem-estar é um presente para si mesmo. Valorize cada escolha saudável, pois elas constroem a fundação de uma vida feliz e equilibrada. Cuide de si com amor e dedicação, pois você merece viver plenamente e com vitalidade";
            imgResult.src = "assets/images/result/culinaria.png";
    
            break;
        case  "Arte, Design e Criatividade":
            textResult.textContent = "Em Arte, Design e Criatividade, você é o autor do seu mundo. Cada traço, cada ideia é uma expressão única da sua imaginação. Abraçar a criatividade é abraçar a liberdade de inventar, inovar e inspirar. O mundo é seu playground, e suas criações são a trilha sonora do seu coração. Não tenha medo de ousar, de ser original. Sua arte é uma dádiva para o mundo.";
            imgResult.src = "assets/images/result/Business-Plan-bro.png";
    
            break;
        case "Consultoria Empresarial":
            textResult.textContent = "Na Consultoria Empresarial, você é a bússola que guia empresas na jornada do sucesso. Cada desafio é uma oportunidade para inovar e transformar. Mantenha-se focado, mantenha a resiliência e lembre-se de que suas soluções têm o poder de moldar o futuro das empresas. Siga em frente, você é o agente da mudança e do crescimento.";
            imgResult.src = "assets/images/result/Consultoria-Financeira.png";
            break;
        default:
            break;
    }

    window.location.href= "resultado.html";

});

document.getElementById("quiz-button-start").addEventListener('click', function () {
    Open_close_query();
});
