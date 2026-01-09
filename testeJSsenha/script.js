function verificaSenha() {
    const users = document.getElementById("user").value;
    const key = document.getElementById("senha").value;

    const user1 = "gabriel";
    const senha1 = 1234;

    if (users === user1 && parseInt(key) === senha1) {
        document.getElementById("ok").innerText = 'Parabéns, pode logar!';
    } else {
        window.alert("Sua senha ou usuário estão errados");
    }
}
