let card = document.querySelector("#container")
let internoBotao = document.querySelector(".interno-cont")
let botao = document.querySelector("#cont-tra")

let time = true

botao.addEventListener('click', () => {
    
    card.classList.toggle('next-input-area')

    if (time) {
        internoBotao.classList.remove('interno-cont')
        internoBotao.classList.add('anima')
    }
    else {
        internoBotao.classList.remove('anima')
        internoBotao.classList.add('interno-cont')
    }
    time = time ? false : true
})
