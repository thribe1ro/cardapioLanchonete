var btnPizza = document.querySelector(".opcoesMenu1") // Seleciona as Pizzas
var btnPorcoes = document.querySelector(".opcoesMenu2") // Seleciona as Porcoes
var btnBebidas = document.querySelector(".opcoesMenu3") // Seleciona as Bebidas
var btnOutros = document.querySelector(".opcoesMenu4") // Seleciona os Outros

var quadradoPizza = document.querySelector("#pizza") // Seleciona a div da Pizza
var quadradoPorcoes = document.querySelector("#porcoes") // Seleciona a div das Porcoes
var quadradoBebidas = document.querySelector("#bebidas") // Seleciona a div das Bebidas
var quadradoOutros = document.querySelector("#outros") // Seleciona a div dos Outros

var opcoesMenu1 = document.querySelector(".opcoesMenu1") // CSS menu 1
var opcoesMenu2 = document.querySelector(".opcoesMenu2") // CSS menu 2
var opcoesMenu3 = document.querySelector(".opcoesMenu3") // CSS menu 3
var opcoesMenu4 = document.querySelector(".opcoesMenu4") // CSS menu 4

var aparecerUm = false // Verifica se as pizzas estao aparecendo
var aparecerDois = false // Verifica se as porcoes estao aparecendo
var aparecerTres = false // Verifica se as bebidas estao aparecendo
var aparecerQuatro = false // Verifica se os outros estao aparecendo

btnPizza.addEventListener("click", () => {
    aparecerUm = !aparecerUm
    quadradoPizza.style.display = aparecerUm ? "flex" : "none" // Aparece a div da pizza

    quadradoPorcoes.style.display = "none" // Esconde a div das Porções
    quadradoBebidas.style.display = "none" // Esconde a div das Bebidas
    quadradoOutros.style.display = "none" // Esconde a div dos outros

    opcoesMenu1.style.background = "#640808" // Muda de cor das Pizzas no menu
    opcoesMenu2.style.background = "none" // Muda a cor das Porções no menu
    opcoesMenu3.style.background = "none" // Muda a cor das Bebidas no menu
    opcoesMenu4.style.background = "none" // Muda a cor dos outros no menu

    if (quadradoPizza.style.display == "none") {
        quadradoPizza.style.display = "flex"
        return
    }
})
btnPorcoes.addEventListener("click", () => {
        aparecerDois = !aparecerDois
        quadradoPorcoes.style.display = aparecerDois ? "flex" : "none" // Aparece a div das porcoes

        quadradoPizza.style.display = "none" // Esconde a div das Pizzas
        quadradoBebidas.style.display = "none" // Esconde a div das Bebidas
        quadradoOutros.style.display = "none" // Esconde a div dos outros

        opcoesMenu1.style.background = "none" // Muda de cor das Pizzas no menu
        opcoesMenu2.style.background = "#640808" // Muda a cor das Porções no menu
        opcoesMenu3.style.background = "none" // Muda a cor das Bebidas no menu
        opcoesMenu4.style.background = "none" // Muda a cor dos outros no menu

        if (quadradoPorcoes.style.display == "none") {
            quadradoPorcoes.style.display = "flex"
            return
        }
})

btnBebidas.addEventListener("click", () => {
    aparecerTres = !aparecerTres
    quadradoBebidas.style.display = aparecerTres ? "flex" : "none" // Aparece a div das bebidas

    quadradoPizza.style.display = "none" // Esconde a div das Pizzas
    quadradoPorcoes.style.display = "none" // Esconde a div das Porções
    quadradoOutros.style.display = "none" // Esconde a div dos outros
    
    opcoesMenu1.style.background = "none" // Muda de cor das Pizzas no menu
    opcoesMenu2.style.background = "none" // Muda a cor das Porções no menu
    opcoesMenu3.style.background = "#640808" // Muda a cor das Bebidas no menu
    opcoesMenu4.style.background = "none" // Muda a cor dos outros no menu

    if (quadradoBebidas.style.display == "none") {
        quadradoBebidas.style.display = "flex"
        return
    }
})

btnOutros.addEventListener("click", () => {
    aparecerQuatro = !aparecerQuatro
    quadradoOutros.style.display = aparecerQuatro ? "flex" : "none" // Aparece a div dos outros

    quadradoPizza.style.display = "none" // Esconde a div das Pizzas
    quadradoPorcoes.style.display = "none" // Esconde a div das Porções
    quadradoBebidas.style.display = "none" // Esconde a div das Bebidas

    opcoesMenu1.style.background = "none" // Muda de cor das Pizzas no menu
    opcoesMenu2.style.background = "none" // Muda a cor das Porções no menu
    opcoesMenu3.style.background = "none" // Muda a cor das Bebidas no menu
    opcoesMenu4.style.background = "#640808" // Muda a cor dos outros no menu

    if (quadradoOutros.style.display == "none") {
        quadradoOutros.style.display = "flex"
        return
    }
})
