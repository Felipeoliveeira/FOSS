function validar(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if(usuario == 'Ulisses' && senha == 'admin'){
        alert('Login com Sucesso!');
        location.href = "conta.html";
    }
    else{
        alert('Login Incorreto!');
    }
}