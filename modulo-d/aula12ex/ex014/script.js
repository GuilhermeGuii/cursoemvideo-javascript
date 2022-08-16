function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#E9D7B3'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE! 
        img.src = 'fototarde.png'
        document.body.style.background = '#69B5D7'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#0C3F62'
    }
}