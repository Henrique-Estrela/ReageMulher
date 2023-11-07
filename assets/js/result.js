
const works = {
    'Tecnologia e Desenvolvimento': [
      [7, 8, 9], // Empreendedor(a) de tecnologia
      [7, 8, 9], // Desenvolvedor(a) de aplicativos móveis
      [7, 8, 9], // Empreendedor(a) de comércio eletrônico
      [7, 8, 9], // Desenvolvedor(a) web
      [7, 8, 9], // Programador(a) de jogos independentes
      [7, 8, 9], // Técnico(a) de reparo de eletrônicos
    ],
    'Marketing e Mídia Digital': [
      [5, 6], // Consultor(a) de marketing digital
      [5, 6], // Empreendedor(a) de mídia social
      [5, 6], // Consultor(a) de SEO (Otimização de Mecanismos de Busca)
      [5, 6], // Escritor(a) freelancer ou redator(a) de conteúdo
      [5, 6], // Consultor(a) de relações públicas
      [5, 6], // Empreendedor(a) de consultoria de marketing
    ],
    'Consultoria Empresarial': [
      [5, 6], // Coach de vida ou coach de carreira
      [5, 6], // Consultor(a) de estratégia de negócios
      [7, 8, 9], // Consultor(a) financeiro
      [5, 6], // Consultor(a) de recursos humanos
      [5, 6], // Consultor(a) de sustentabilidade
      [5, 6], // Empreendedor(a) de consultoria de gestão
      [5, 6], // Empreendedor(a) de consultoria de educação
      [5, 6], // Empreendedor(a) de consultoria de recrutamento
      [5, 6], // Empreendedor(a) de consultoria de design de interiores
      [5, 6], // Empreendedor(a) de consultoria de inovação
      [5, 6], // Consultor(a) de gerenciamento de projetos
      [5, 6], // Consultor(a) de planejamento financeiro
      [7, 8, 9], // Consultor(a) de consultoria de segurança cibernética
      [5, 6], // Empreendedor(a) de consultoria de turismo
    ],
    'Arte, Design e Criatividade': [
      [7, 8, 9], // Designer gráfico freelancer
      [7, 8, 9], // Designer de moda
      [7, 8, 9], // Designer de joias
      [7, 8, 9], // Empreendedor(a) de consultoria em alimentos e bebidas
    ],
    'Saúde e Bem-Estar': [
      [5, 6], // Terapeuta ou coach de saúde mental
      [5, 6], // Nutricionista ou coach de saúde e bem-estar
      [5, 6], // Treinador(a) de fitness ou personal trainer
      [7, 8, 9], // Chef ou empreendedor(a) de culinária
    ],
  };
  
  const perguntas = [
    'De 0 a 10, o quanto você se sente confortável em trabalhar diretamente com o público?',
    'Você prefere:\n a) Trabalhar sozinha\n b) Em equipe\n c) Depende da situação',
    'Quais destas opções você acha mais interessante?\n a) Vendas e comércio\n b) Serviços\n c) Produção de produtos\n d) Tecnologia e inovação',
    'Como você se sente em relação a riscos financeiros?\n a) Evito ao máximo\n b) Estou disposta a correr alguns riscos se for necessário\n c) Adoro desafios e riscos são parte do jogo',
    'Qual destes ambientes você prefere?\n a) Escritório\n b) Loja física\n c) Online (trabalhar remotamente)\n d) Ambiente externo (por exemplo, eventos, feiras)',
    'Em relação à rotina, você:\n a) Prefere uma rotina estruturada\n b) Gosta de variedade e mudança constante\n c) Precisa de flexibilidade no seu horário',
    'Como você se sente em relação a liderança?\n a) Adoro liderar equipes\n b) Prefiro trabalhar sozinha ou com uma equipe pequena\n c) Não tenho certeza ainda',
  ];
  
  const responsesUser = [1, 'b', 'b', 'b', 'b', 'b', 'b'];

function calcularPontuacao(respostas) {
  let bestScore = -Infinity;
  let workProfession = '';

  for (const profissao in works) {
    const pontuacao = works[profissao].map((characteristicsProfession, index) =>
        characteristicsProfession.reduce((total, caracteristica, letraIndex) => {
          const resposta = respostas[index];
          if (typeof resposta === 'string') {
            const respostaIndex = resposta.charCodeAt(0) - 'a'.charCodeAt(0);
            return total + caracteristica * (letraIndex === respostaIndex ? 1 : 0);
          } else {
            return total + caracteristica * resposta;
          }
        }, 0)
      ).reduce((total, pontuacaoProfissao) => total + pontuacaoProfissao, 0);

    if (pontuacao > bestScore) {
      bestScore = pontuacao;
      workProfession = profissao;
    }
  }

  return workProfession;
}
const workProfession = calcularPontuacao(responsesUser);

document.getElementById('profissao-sugerida').textContent = workProfession;
var textResult = document.getElementById("text-result");
var imgResult = document.getElementById("img-result");


switch (workProfession) {
    case 'Tecnologia e Desenvolvimento':
        textResult.textContent = "A vida é uma jornada repleta de desafios e oportunidades. Lembre-se de que cada obstáculo que você enfrenta é uma chance de crescimento. Acredite em si mesmo, mantenha sua determinação e nunca desista dos seus sonhos. O caminho pode ser íngreme, mas as recompensas no topo valem a pena. Mantenha-se positivo, persista e conquiste o mundo com sua determinação.";
        imgResult.src = "assets/images/result/tecnologia-e-desenvolvimento.png";
        break;

    case 'Marketing e Mídia Digital':
        textResult.textContent = "Marketing e Mídia Digital são os trampolins para criar conexões poderosas e contar histórias envolventes. Na era digital, você tem o mundo como audiência. Sua criatividade é a chave e sua paixão é o combustível. Abrace as oportunidades, esteja aberto a aprender constantemente e veja o sucesso como uma jornada emocionante, não apenas um destino. O ciberespaço é seu campo de jogo. Vá lá e brilhe!";
        imgResult.src = "assets/images/result/Business-Plan-bro.png";

        break;
    case 'Saúde e Bem-Estar':
        textResult.textContent = "Sua saúde é seu ativo mais valioso. Cada passo em direção ao bem-estar é um presente para si mesmo. Valorize cada escolha saudável, pois elas constroem a fundação de uma vida feliz e equilibrada. Cuide de si com amor e dedicação, pois você merece viver plenamente e com vitalidade";
        imgResult.src = "assets/images/result/culinaria.png";

        break;
    case  'Arte, Design e Criatividade':
        textResult.textContent = "Em Arte, Design e Criatividade, você é o autor do seu mundo. Cada traço, cada ideia é uma expressão única da sua imaginação. Abraçar a criatividade é abraçar a liberdade de inventar, inovar e inspirar. O mundo é seu playground, e suas criações são a trilha sonora do seu coração. Não tenha medo de ousar, de ser original. Sua arte é uma dádiva para o mundo.";
        imgResult.src = "assets/images/result/Business-Plan-bro.png";

        break;
    case 'Consultoria Empresarial':
        textResult.textContent = "Na Consultoria Empresarial, você é a bússola que guia empresas na jornada do sucesso. Cada desafio é uma oportunidade para inovar e transformar. Mantenha-se focado, mantenha a resiliência e lembre-se de que suas soluções têm o poder de moldar o futuro das empresas. Siga em frente, você é o agente da mudança e do crescimento.";
        imgResult.src = "assets/images/result/Consultoria-Financeira.png";
        break;
    default:
        break;
}
