function altera_tamanho() {
    x = document.getElementById('div')
    menuIcon = document.getElementById('teste')
    if(x.style.width === "180px"){
        x.style.width = 70 + 'px'
        menuIcon.style.visibility = 'hidden'
    } else {
        x.style.width = 180 + 'px'

       setTimeout(() => {
        menuIcon.style.visibility = 'visible'
       },500)
    }

}
