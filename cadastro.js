function validar(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let subtitle = document.getElementById('sub_title');

    if(usuario == 'Ulisses' && senha == 'admin'){
        subtitle.innerText = "Login efetuado com sucesso" + ' \u{2705} '
        setTimeout(() => {
            location.href = "conta.html"
        }, 1900);
    }
    else if(usuario != 'Ulisses'){
        subtitle.innerText = "Usuário incorreto" + '\u{1F625}'
    } else if(senha != 'admin'){
        subtitle.innerText = "Senha incorreta" + '\u{1F625}'
    }
}