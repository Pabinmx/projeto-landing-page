 var leonardo = window.document.getElementById('leonardo')
var samantha = window.document.getElementById('samantha')
var bruna = window.document.getElementById('bruna')
var direita = window.document.getElementById('direita')
var esquerda = window.document.getElementById('esquerda')


function RolarParaDireita() {
    samantha.style ='display:none'
     bruna.style ='display:flex'
    direita.style ='display:none'
    esquerda.style ='display:flex; margin-top: 60px'

}

function RolarParaEsquerda(){
    samantha.style ='display:flex'
     bruna.style ='display:none'
    direita.style ='display:flex'
    esquerda.style ='display:none'
}