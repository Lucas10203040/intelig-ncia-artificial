const caixaPrincipal = document.querySelector(".caixa__principal");
const caixaPerguntas = document.querySelector(".caixa__perguntas");
const caixaAlternativas = document.querySelector(".caixa__alternativas");
const caixaResultados = document.querySelector(".caixa__resultados");
const textoResultado = document.querySelector(".texto__resultado");

caixa perguntas = [
    {
        enunciado: "Aron, um jovem aventureiro, chega à entrada da Floresta dos Segredos em busca de um artefato lendário. No chão, encontra uma adaga antiga com runas brilhantes.

O que ele faz?"
        alternativas: [
            "Pega a adaga.";
            "Ignora e segue em frente."
        ]
    }
{
    enunciado: "Aron pega a adaga, e runas brilham em sua lâmina. Uma voz ecoa em sua mente:
— Você despertou a Adaga das Runas. Prove-se digno.

O cenário muda. Ele está em uma clareira rodeada por pilares brilhantes, onde uma criatura sombria surge, rosnando.

O que ele faz?"
    alternativas: [
        "Enfrenta a criatura com a adaga."
        "Procura uma saída."
    ]
}
{
    enunciado: "Aron ergue a adaga e avança contra a criatura. A lâmina emite um brilho intenso, como se reconhecesse a ameaça. A sombra ataca com garras afiadas, mas a adaga rebate seus golpes, dissipando partes da escuridão a cada golpe.

Após um combate intenso, Aron enfia a adaga no núcleo brilhante da criatura. Ela emite um grito agudo antes de desaparecer. Quando tudo se acalma, a voz da adaga volta:

— Você é corajoso, mas a jornada está apenas começando.

Um portal se abre diante dele, levando a um caminho desconhecido.

O que ele faz?"
    alternativas: [
        "Entra no portal, seguindo a voz."
        "Recusa o portal e explora a clareira em busca de pistas."
    ]
}
{
    enunciado: "Aron decide entrar no portal, confiando na voz da adaga. Ele atravessa um vórtice brilhante e se encontra em um grande salão subterrâneo. No centro, um pedestal guarda um cristal pulsante, claramente o artefato lendário que ele buscava.

— Este é o Coração da Floresta, fonte de poder e desejo — explica a voz da adaga. — Mas cuidado, pois cada desejo tem um preço.

Aron se aproxima do cristal. Uma energia intensa o envolve, e ele sente que pode moldar sua realidade com um único pensamento.

O que Aron deseja?"
    alternativas: [
        "Riqueza e glória eternas."
        "Paz e prosperidade para sua vila."
    ]
}
{
    enunciado: "Aron respira fundo e faz sua escolha.
                       O Egoísmo de Aron ou O Sacrifício de Aron"
    alternativas: [
        "O Egoísmo de Aron
Desejando riqueza e glória, Aron toca o cristal. Sua vila desaparece, e ele acorda em um palácio dourado, cercado por riquezas inimagináveis. Mas está sozinho, amaldiçoado a viver sem companhia ou propósito, prisioneiro de sua própria ganância.

"
        "O Sacrifício de Aron 
        Aron deseja paz para sua vila. O cristal brilha intensamente, e ele sente sua energia ser drenada. Quando acorda, está de volta à entrada da floresta, exausto. Ele retorna à vila e a encontra próspera, mas ninguém se lembra de sua jornada. Ainda assim, Aron sorri, satisfeito com sua decisão altruísta.

        "
    ]
}
