function verificar() {
    var data = new Date
    ano = data.getFullYear()
    var fano = document.querySelector(`input#txtano`)
    var res = document.querySelector(`div#res`)

    if (fano.value.length == 0 || fano.value > ano) {
        alert(`ERRO! Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`,`fots`)
        if (fsex[0].checked) {
            genero = `homem`
            if (idade < 10) {
                //criança
                img.setAttribute(`src`,`imagens/bebe-m.jpg`)
            } else if (idade < 21) {
                //jovem
                img.setAttribute(`src`,`imagens/jovem-m.jpg`)
            } else if (idade < 50) {
                //adulto
                img.setAttribute(`src`,`imagens/adulto-m.jpg`)
            } else {
                //idoso
                img.setAttribute(`src`,`imagens/idoso-m.jpg`)
            }
        } else {
            genero = `mulher`
            if (idade < 10) {
                //criança
                img.setAttribute(`src`,`imagens/bebe-f.jpg`)
            } else if (idade < 21) {
                //jovem
                img.setAttribute(`src`,`imagens/jovem-f.jpg`)
            } else if (idade < 50) {
                //adulto
                img.setAttribute(`src`,`imagens/adulta-f.jpg`)
            } else {
                //idoso
                img.setAttribute(`src`,`imagens/idosa-f.jpg`)
            }
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}