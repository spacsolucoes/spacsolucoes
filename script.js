// =====================
// MODAL — IMAGEM
// =====================
function abrirImagem(src) {
  document.getElementById("modal-imagem").style.display = "flex";
  document.getElementById("imagem-ampliada").src = src;
}

function fecharImagem() {
  document.getElementById("modal-imagem").style.display = "none";
}

// =====================
// MODAL — SERVIÇOS
// =====================
function abrirServico(id) {
  document.getElementById("modal-" + id).style.display = "flex";
}

function fecharServico(id) {
  document.getElementById("modal-" + id).style.display = "none";
}

// Fechar modal ao clicar fora do conteúdo
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-servico")) {
    e.target.style.display = "none";
  }
});
