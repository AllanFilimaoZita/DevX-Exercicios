function fazerLogin() {

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if(email === "admin" && senha === "1234") {
        alert("Login Realizado com Sucesso")
    } else {
        alert("E-mail ou senha incorretos.")
    }

}