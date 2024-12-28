const botaoAdicionar  = document.querySelectorAll(".botaoAdicionar");
var sacola = document.getElementById("sacola");
var abrirSacola = document.getElementById("abrirSacola");
var sacolaDentroItens = document.getElementById("sacolaDentroItens");
var xSacola = document.getElementById("btnxSacola");
var notificacaoAddSacola = document.getElementById("notificacaoAddSacola");
var notificacaoRemSacola = document.querySelector("#notificacaoRemSacola");
var acai = document.getElementById("acai");
var adicionais = document.getElementById("adicionais");
var quadradoItensAcai = document.getElementById("quadradoItensAcai");
var quadradoItensAdicionais = document.getElementById("quadradoItensAdicionais");
var Total = document.getElementById("total");
const enviarPedido = document.querySelectorAll("#enviarPedido");
var notificacaoEndereco = document.getElementById("notificacaoEndereco");
var endereco = document.getElementById("endereco");

var fechar = false
var total = 0

var Sacola = []

// Seleção de menus
// Açai
acai.addEventListener("click", function() {
    acai.style.background = "#ff1f1fb4"
    quadradoItensAcai.style.display = "flex"
    if (acai) {
    adicionais.style.background = "transparent"
    quadradoItensAdicionais.style.display = "none"
    }
}); 
//Adicionais
adicionais.addEventListener("click", function() {
    adicionais.style.background = "#ff1f1fb4"
    quadradoItensAdicionais.style.display = "flex"
    if (adicionais) {
        acai.style.background = "transparent"
        quadradoItensAcai.style.display = "none"
    }
}); 
// Fim da seleção =================================================================================================================

//Botão de adiciona o item à sacola
botaoAdicionar.forEach(botao => {
    botao.addEventListener("click", function () {
        let quantidadeID = document.querySelector("#quantidade");
        let quantidadeCLASS = document.querySelector(".quantidade");

        // Obtém os dados do botão clicado
        const name = botao.getAttribute("data-name");
        const price = parseFloat(botao.getAttribute("data-price"));

        // Atualiza as quantidades no cabeçalho
        quantidadeID.innerHTML = parseInt(quantidadeID.innerHTML) + 1;
        quantidadeCLASS.innerHTML = parseInt(quantidadeCLASS.innerHTML) + 1;
        notificacaoAddSacola.style.display = "flex";
        if (notificacaoAddSacola.style.display == "flex") {
            notificacaoRemSacola.style.display = "none";
        }
        setInterval(() => {
            notificacaoAddSacola.style.display = "none";
        }, 3000);

        // Atualiza o array Sacola
        const procurarNaSacola = Sacola.findIndex(item => item.name === name);
        if (procurarNaSacola !== -1) {
            // Atualiza a quantidade se o item já existir
            Sacola[procurarNaSacola].quantity += 1;
        } else {
            // Adiciona o item novo à sacola
            Sacola.push({ name, price, quantity: 1 });
        }

        // Atualiza o total
        total += price;
        Total.innerHTML = `Total: R$ ${total.toFixed(2)}`;

        // Cria um novo elemento para o item
        let item = document.createElement("div");
        item.classList.add("itens");
        item.innerHTML = `
            <div id="itensSacola">
                <h1>${name}</h1>
                <h1>R$ ${price.toFixed(2)}</h1>
                <div id="quadradoRemoverItens">
                <span id="removerItem"></span>
                </div>
            </div>
        `;

        // Adiciona o evento ao botão "Remover" do item
        const botaoRemover = item.querySelector("#removerItem");
        botaoRemover.addEventListener("click", function () {
            // Remove o item da sacola
            sacolaDentroItens.removeChild(item);

            notificacaoRemSacola.style.display = "flex";
            if (notificacaoRemSacola.style.display === "flex") {
                notificacaoAddSacola.style.display = "none";
            }
            setInterval(() => {
                notificacaoRemSacola.style.display = "none";
            }, 3000);

            // Atualiza o array Sacola
            const itemIndex = Sacola.findIndex(item => item.name === name);
            if (itemIndex !== -1) {
                if (Sacola[itemIndex].quantity > 1) {
                    Sacola[itemIndex].quantity -= 1;
                } else {
                    Sacola.splice(itemIndex, 1);
                }
            }

            // Atualiza o total
            total -= price;
            Total.innerHTML = `Total: R$ ${total.toFixed(2)}`;

            // Atualiza as quantidades no cabeçalho
            quantidadeID.innerHTML = parseInt(quantidadeID.innerHTML) - 1;
            quantidadeCLASS.innerHTML = parseInt(quantidadeCLASS.innerHTML) - 1;
        });

        // Adiciona o item à sacola
        sacolaDentroItens.appendChild(item);
    });
});


// Abre e fecha a sacola
sacola.addEventListener("click", function () {
    abrirSacola.style.display = !fechar ? "flex" : "none";
    fechar = !fechar;
});

xSacola.addEventListener("click", function () {
    abrirSacola.style.display = "none";
    notificacaoEndereco.style.display = "none";
    fechar = false;
});

endereco.addEventListener("input", function () {
    if (endereco.value.trim() !== "") {
        notificacaoEndereco.style.display = "none"; // Esconde a notificação
        endereco.style.border = "1.5px solid #000000";
    }
});

enviarPedido.forEach(botao => {
    botao.addEventListener("click", function () {
        let quantidadeID = document.querySelector("#quantidade");
        let quantidadeCLASS = document.querySelector(".quantidade");
        // Monta a lista de itens a partir do array Sacola
        const pedido = Sacola.map(item => `${item.quantity}x ${item.name} - `).join("\n");

        // Calcula o total da sacola
        const totalSacola = Sacola.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        // Monta a mensagem do pedido
        const mensagem = encodeURIComponent(`Pedido:\n${pedido}\n\nTotal: R$ ${totalSacola.toFixed(2)}\nEndereço: ${endereco.value}`);

        // Verifica se o endereço foi preenchido
        if (endereco.value && endereco.value.trim() !== "") {
            window.open(`https://api.whatsapp.com/send?phone=5512988203607&text=${mensagem}`, "_blank");
            sacolaDentroItens.innerHTML = ""; // Limpa a sacola
            quantidadeCLASS.innerHTML = 0; // Limpa a quantidade
            quantidadeID.innerHTML = 0; // Limpa a quantidade
            Total.innerHTML = "Total: R$ 0,00"; // Limpa o total
            total = 0; // Limpa o total
            Sacola = []; // Limpa o array Sacola
            endereco.value = "";
        } else {
            notificacaoEndereco.style.display = "flex"; // Exibe a notificação
            endereco.style.border = "1.5px solid red";
        }
    });
});