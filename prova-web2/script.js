let formCadastroProduto = document.getElementById('formCadastroProduto');
let containerCards = document.getElementById('containerCards');
let btnApagarTudo = document.getElementById('btnApagarTudo');

function criarCard(titulo) 
{
    let randomImageId = Math.floor(Math.random() *1000);

    let card = document.createElement('div');
    card.classList.add('col-md-4', 'col-sm-6', 'col-12');

    card.innerHTML = `
    <div class="card">
        <img src="https://picsum.photos/300/200?random=${randomImageId}" class="card-img-top" alt="Imagem aleatória">
        <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <button class="btn btn-danger" onclick="removerCard(this)">Apagar</button>
        </div>
    </div>
    `;
    containerCards.appendChild(card);
}

function removerCard(button) 
{
    let cardRemover = button.closest('.col-md-4');
    cardRemover.remove();
}

function apagarTodosCards()
{
    containerCards.innerHTML = '';
}

formCadastroProduto.addEventListener('submit', function (event) {
    event.preventDefault();

    let titulo = document.getElementById('tituloInput').value;
    if (titulo.trim() !== "") {
        criarCard(titulo);
    }

    document.getElementById('tituloInput').value = '';
});

btnApagarTudo.addEventListener('click', function () {
    apagarTodosCards();
});
