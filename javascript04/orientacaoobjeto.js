//um conjunto de vários objetos
class Botao {
    constructor(cor, tamanho, texto, icone) {
        this.cor = cor
        this.tamanho = tamanho
        this.texto = texto
        this.icone = icone
    }

    desenhaBotao() {
        console.log("text")
        const novoBotaoNoDom = document.createElement('button')
        novoBotaoNoDom.setAttribute('class', `${this.cor} ${this.tamanho}`)
        if(this.icone) {
            const tagIcone = document.createElement('i')
            tagIcone.setAttribute('class', `fas ${this.icone}`)
            novoBotaoNoDom.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            novoBotaoNoDom.appendChild(text)
            // console.log(novoBotaoNoDom)
        } else {
            novoBotaoNoDom.innerHTML = this.texto
        }
        document.getElementById('buttons-section').appendChild(novoBotaoNoDom)
        console.log(novoBotaoNoDom)
    }
}

const novoBotao = new Botao('verde', 'grande', 'click me!');
novoBotao.desenhaBotao()
console.log(novoBotao)

const botaoRoxo = new Botao('roxo', 'pequeno', 'click me!', 'fa-plus');
console.log(botaoRoxo)
botaoRoxo.desenhaBotao()