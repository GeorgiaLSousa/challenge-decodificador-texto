function exibir(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

exibir("h1", "Challenge");

function processarMensagem() {
    let mensagem = document.querySelector("input").value;
    console.log(mensagem);

    let criptografada = mensagem.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    let descriptografada = mensagem.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    if (this.id === "Criptografar_texto") {

        console.log(criptografada);
        exibir('h2', criptografada);
        document.querySelector("input").value = mensagem;

    } else if (this.id === "Descriptografar_texto") {
        
        console.log(descriptografada);
        exibir('h2', descriptografada);
    document.querySelector("input").value = mensagem;
    }
}

let btnCriptografar = document.getElementById("Criptografar_texto");
let btnDescriptografar = document.getElementById("Descriptografar_texto");

btnCriptografar.addEventListener("click", processarMensagem);
btnDescriptografar.addEventListener("click", processarMensagem);