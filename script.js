const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: "Você já deve ter percebido que o nosso planeta está mudando. Qual o seu primeiro pensamento?",
alternativas: [
{
texto: "Isso é assustador!",
afirmacao: "Não sei o que vai acontecer com o planeta."
},
{
texto: "Isso é normal.",
afirmacao: "Como ajudar o planeta."
}
]
},
{
enunciado: "Com as chamadas mudanças climáticas, temos um novo desafio: diminuir os impactos no meio ambiente. Qual atitude você toma?",
alternativas: [
{
texto: "Faz a sua parte, com pequenas atitudes diárias",
afirmacao: "Sabe que vai fazer a diferença."
},
{
texto: "Não liga para esse assunto.",
afirmacao: "Sabe que não vai fazer diferença."
}
]
},
{
        enunciado: "O planeta não é mais o mesmo e, o que você fez para mudar isso......",
        enunciado: "Em 2049 o planeta não é mais o mesmo e, o que você fez para mudar isso......"

},


];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}

function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
