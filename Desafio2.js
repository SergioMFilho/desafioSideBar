function altera_tamanho() {
    x = document.getElementById('div')
    if(x.style.width == "70px"){
        x.style.width = 180 + 'px'
    } else {
        x.style.width = 70 + 'px'
    }
}