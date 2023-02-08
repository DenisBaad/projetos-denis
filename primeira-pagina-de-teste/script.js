function nomeUsuario(){
    const nomeUsuario = "Denis"
    document.querySelector(".top-bar p").innerHTML += `<strong> ${nomeUsuario} </strong>`
}

nomeUsuario()