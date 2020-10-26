const users = [{ email: "admin@admin.com.br", senha: 1234 }];

const email = document.getElementById("usuario");
const senha = document.getElementById("senha")

function login(key, value) {
    for (const user of users) {
        if (user.email == email.value && user.senha == senha.value) {
            localStorage.setItem("usuario", user.email);
        } else {
            alert("Usuário inválido!");
        }
    }
    logado()
}


function logado() {
    const logado = localStorage.getItem("usuario");
    const corpo = document.body
    if (logado) {
        console.log(`Usuário logado: ${logado}.`)
        document.getElementById("container-display").style.display = "none";
        corpo.classList.remove("background");
        document.getElementById("menu-display").style.display = "flex";
        document.getElementById("conteudo").style.display = "flex";
    } else {
        document.getElementById("container-display").style.display = "flex";
        corpo.classList.add("background");
        document.getElementById("menu-display").style.display = "none";
        document.getElementById("conteudo").style.display = "none";
    }
}

const avatar = document.getElementById("avatar");
avatar.addEventListener("click", mouseClick);

function mouseClick() {
    document.getElementById("sair").style.display = "flex";
}

const sair = document.getElementById("sair");
sair.addEventListener("click", logout);

function logout(key) {
    localStorage.removeItem("usuario");
    logado();
    email.value = "";
    senha.value = "";

}



