function pNome(){
    var nome = prompt("Digite o seu nome: ");
    var nome_usuario = document.getElementById("nome_usuario");
    nome_usuario.innerHTML = "Muito obrigado " + nome + ", por visitar a minha página";
}

