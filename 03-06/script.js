function MostrarOcultar() {
    if (document.getElementById("senha").type == "text") {
        document.getElementById("senha").type = "password";
    } else {
        document.getElementById("senha").type = "text";
    }
}


function atualizar() {
    let mensagem = document.getElementById("mensagem");
    let senha = document.getElementById("senha").value;
    if (senha.length < 8) {
        mensagem.style.color = "red";
        document.getElementById("senha").style.borderColor = "red";
        mensagem.innerHTML = "Senha deve ter pelo menos 8 caracteres";
    } else {
        document.getElementById("senha").style.borderColor = "black";
        mensagem.style.color = "green";
        mensagem.innerHTML = "Senha válida";
    }
}

function Estudante() {
    if (document.getElementById("Estudante").checked) {
       document.querySelector(".caixa").style.display = "block";
    } else {
        document.querySelector(".caixa").style.display = "none";
    }
} 


