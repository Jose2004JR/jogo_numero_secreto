const btnTentativa = document.getElementById("tentar");
const btnRetry = document.getElementById("retry");
const title = document.getElementById("title")
const description = document.getElementById("desctiption")
const caixa1 = document.getElementById("radio1");
const caixa2 = document.getElementById("radio2");
const caixa3 = document.getElementById("radio3");
let input = document.getElementById("input");
let tentativas = 1

function gerador(){

    let especialNumber;

    if(caixa1.checked){
        especialNumber = 10
    }else if(caixa2.checked){
        especialNumber = 100
    }else if(caixa3.checked){
        especialNumber = 1000
    }

    let randomNum = Math.floor(Math.random() * especialNumber + 1)
    console.log(randomNum)
    return randomNum
}
let randomNum = gerador()

function verificador(input){
    randomNum.toString()
    
    if(input == randomNum){
        title.innerText = "Acertou!";
        description.innerText = `Parabéns! Você achou o número escondido com ${tentativas} tentativas`
    }else if(randomNum > input){
        description.innerText = "é um número maior"
        tentativas++
    }else{
        description.innerText = "é um número menor"
        tentativas++
    }
}

btnTentativa.addEventListener("click",()=>{
    verificador(input.value)
})
btnRetry.addEventListener("click",()=> {
    title.innerText = "Jogo do número aleátorio"
    description.innerText = "escolha um número de 1 a 100"
    randomNum = gerador();
});

