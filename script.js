
const escolherNumeroAleatorio = () => Math.round(Math.random() * 99) + 1;
const esconderPanel = (panel,state) => document.getElementById(panel).hidden = state;

var numero = escolherNumeroAleatorio();
var numeroTentativas = 10;

console.log(numero)
    
esconderPanel("endGame",true)
document.getElementById("restart").onclick = () => {
    location.reload();
};

document.getElementById("resultNumber").textContent = "seu número era: " + numero
function adivinharNumero(){
    var numeroAdivinhado = parseInt(document.getElementById("numeroEscolha").value)
    
    if (numeroAdivinhado > 100 || numeroAdivinhado < 1){
        document.getElementById("numeroMaiorOuMenor").textContent = "número inválido"
    }
    else if (numeroTentativas > 0)
    {    if (numeroAdivinhado == numero){
            document.getElementById("resultTitle").textContent = "Vitória"
            document.getElementById("resultText").textContent = "parabéns você venceu, clique botão para reiniciar"
            numeroTentativas = 0
        }
        else if (numeroAdivinhado < numero){
            numeroTentativas -= 1
            document.getElementById("numeroMaiorOuMenor").textContent = "seu número é maior"
            document.getElementById("tentativas").textContent = "número de tentaivas: " + numeroTentativas
        }
        else if (numeroAdivinhado > numero){
            numeroTentativas -= 1
            document.getElementById("numeroMaiorOuMenor").textContent = "seu número é menor"
            document.getElementById("tentativas").textContent = "número de tentaivas: " + numeroTentativas
        }
    }
    if (numeroTentativas <= 0){
        esconderPanel("endGame", false)
        esconderPanel("gamePanel",true)
    }

    
}