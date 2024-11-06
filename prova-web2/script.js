function adicionarCard() {
    const titulo = document.getElementById("inpu").value;
    if (titulo.trim() === "") {
      alert("Por favor, insira um título.");
      return;
    }
    const randomImageUrl = `https://picsum.photos/200/150?random=${Math.floor(Math.random() * 1000)}`;
    const cardHTML = `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="${randomImageUrl}" class="card-img-top" alt="Imagem Aleatória">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <button class="btn btn-danger btn-sm apagarBtn">Apagar</button>
          </div>
        </div>
      </div>
    `;
    document.getElementById("cardsContainer").insertAdjacentHTML("beforeend", cardHTML);
    document.getElementById("inputTitulo").value = "";
    const apagarButtons = document.getElementsByClassName("apagarBtn");
    Array.from(apagarButtons).forEach(button => {
      button.onclick = function() {
        this.closest('.col-md-3').remove();
      };
    });
  }