let listaMalhas = [
    {
        "nome": "Cachecol",
        "img": "img/malha1.png",
        "descricao": "Cachecol Lã Tricô. Unissex. Cores variadas. Acessório elegante para se agasalhar com muito estilo em dias frios."
    },
    {
        "nome": "Gorro e Boina",
        "img": "img/malha2.png",
        "descricao": "Gorro / Boina Lã Tricô. Unissex. Cores variadas. Ideal para completar o look com muito estilo."
    },
    {
        "nome": "Sapatinho",
        "img": "img/malha3.png",
        "descricao": "Sapatinho Lã Tricô. Cores Variadas. Recém-nascido. Estilo tênis. Peça importante para montar o enxoval de seus sonhos."
    },
    {
        "nome": "Sapato",
        "img": "img/malha4.png",
        "descricao": "Sapato Lã Tricô. Cores Variadas. Acima de 1 ano. Com sola antiderrapante. Para acompanhar os primeiro passos do seu bebê."
    },
    {
        "nome": "Blusa Infantil",
        "img": "img/malha5.png",
        "descricao": "Blusa Lã Tricô. Unissex. Cores variadas. Básico, macio e confortável para aquecer sua criança."
    },
    {
        "nome": "Blusa Feminina",
        "img": "img/malha6.png",
        "descricao": "Blusa Lã Tricô. Feminina. Cores variadas. Adequado para qualquer ocasião. É um item básico em seu guarda-roupa."
    },
    {
        "nome": "Top",
        "img": "img/malha7.png",
        "descricao": "Top Lã Tricô. Feminina. Cores variadas. É uma peça versátil que não pode faltar em seu viusal."
    },
    {
        "nome": "Top",
        "img": "img/malha8.png",
        "descricao": "Top Lã Tricô. Feminina. Cores variadas. É uma peça versátil que não pode faltar em seu look."
    },
    {
        "nome": "Blusa Masculina",
        "img": "img/malha9.png",
        "descricao": "Blusa Lã Tricô. Masculina. Cores variadas – a maravilha que você pensa nós criamos no tricô.  Uma ótima combinação com o seu par favorito de jeans."
    },
    {
        "nome": "Bolsa",
        "img": "img/malha10.png",
        "descricao": "Bolsa Tricô. Cores variadas. Acessório prático que permite diferentes formas de uso."
    },
    {
        "nome": "Blusa/ Top",
        "img": "img/malha11.png",
        "descricao": "Blusa/ Top Lã Tricô. Feminina. Cores variadas. Aposte nessa maravilhosa peça. Moderna, básica e elegante."
    },
    {
        "nome": "Blusa / Regata",
        "img": "img/malha12.png",
        "descricao": "Blusa / Regata Lã Tricô. Feminina. Cores variadas. Essa regata versátil vai te acompanhar em diversas produções, tanto nos looks mais formais, quanto em looks despojados."
    }
]
// para as imagens ir dinamicamente para a pagina
listaMalhas.map((malha, posicao) => {
    let cardMalha = document.getElementById("cards");
    cardMalha.innerHTML += `
        <div class="col-md-3">
            <div class="card m-2">
                <img src="${malha.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${malha.nome}</h5>
                  <a href="#" class="btn btn-warning" onClick ="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div>
    `
    // na class="col digitar quantas colunas por linha, md-4 são 3 coluna - responsivo"
    //  console.log(malha)

    // Incluir o parametro posicao = identificar a posição da malha, ver qual a opção clicada. 
    // console.log(posicao)
})

// receber a posição que o map esta descriminando, adicionando o evento onClick, para ao clicar acionar o modal
// iniciar a primeira linha da function abaixo, despois que incluir a função no map onClick ="zoomImg('${posicao}'),
//  continuar a digitação na função= function.
// para acionar o modal tem que abrir - new bootstrap...
/* <div class="card m-2"> m-2 é a configuração, do bootstrap, da distancia entre os cards*/

function zoomImg(posicao) {
    let malhaSelecionada = listaMalhas[posicao];
    document.getElementById("nomeMalha").innerHTML = malhaSelecionada.nome;
    document.getElementById("descricaoMalha").innerHTML = malhaSelecionada.descricao;
    document.getElementById("imgModal").src = malhaSelecionada.img;

    new bootstrap.Modal('#zoomImg').show();
}

// nova função para acionar a troca do tema.
function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
    } document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
}
