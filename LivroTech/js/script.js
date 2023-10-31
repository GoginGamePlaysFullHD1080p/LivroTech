
// Função para mostrar/ocultar a lista suspensa
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function executarAcao(acao) {
    // Implemente aqui a lógica para cada ação
    console.log("Compra feita com sucesso " + acao);
    alert("Compra feita com sucesso")
}

//seleção de livros
$(document).ready(function(){
    $('.selection-block').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2
      });
});
      