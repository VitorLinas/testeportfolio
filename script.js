let inputNome = document.getElementById("name");
let inputEmail =  document.getElementById("email");
let inputMensagem =  document.getElementById("message");

let envio = document.getElementById("envio");
let red = document.getElementById("red");


function enviar(){
    let nome = inputNome.value;
    let email = inputEmail.value;
    let mensagem = inputMensagem.value;

    

    if(nome==''|| email==''||mensagem==''){
        window.alert("Preencha todas as áreas");
        envio.value = "";   
        red.action = "";
        red.method = "";
    }
    else{
        window.alert("Eviado! Aguarde o retorno.")
    }
}




document.querySelector(".hamburguer").addEventListener("click", () =>
document.querySelector(".hamburguerContainer").classList.toggle("show-menu"));





