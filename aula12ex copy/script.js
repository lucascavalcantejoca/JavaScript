function carregar() {
    var msg = document.querySelector(`div#msg`)
    var img = document.querySelector(`img#fots`)
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <12) {
        //bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = `#CEAE8A`
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = `#975020`
    } else {
        //boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = `#574571`
    }
}
