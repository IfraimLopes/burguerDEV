//Mostrar y ocultar sidebar
function showsibar(){
    const slidebar = document.querySelector('.slidebar');
    slidebar.style.display = 'flex';
}

function closesibar(){
    const slidebar = document.querySelector('.slidebar');
    slidebar.style.display = 'none';
}

//Loading

window.addEventListener("load", () => {
    const loading = document.querySelector('.Loading');
    const load = document.querySelector('.lo');
    document.body.style.background = 'rgba(0, 0, 0, 0.6)';


    setTimeout(() => {
        loading.style.display = 'none';
        load.style.display = 'none';

        document.body.style.background = 'transparent';
    }, 2200);
});


function Load(){
    const loading = document.querySelector('.Loading');
    const load = document.querySelector('.lo'); 
    loading.style.display = 'block';
    load.style.display = 'block';
    document.body.style.background = 'rgba(0, 0, 0, 0.6)';
    setTimeout(() => {
        loading.style.display = 'none';
        load.style.display = 'none';

        document.body.style.background = 'transparent';
    }, 2000);
}

function LD(){
    const loading = document.querySelector('.Loading');
    const load = document.querySelector('.lo'); 
        document.body.style.background = 'rgba(0, 0, 0, 0.6)';
    loading.style.display = 'block';
    load.style.display = 'block';

    setTimeout(() => {
        loading.style.display = 'none';
        load.style.display = 'none';
        document.body.style.background = 'transparent';
    }, 1000);
}

// ===============================
// VARIÁVEIS GLOBAIS DO PEDIDO
// ===============================
let nomeAtual = "";
let precoAtual = 0;

// ===============================
// ELEMENTOS
// ===============================
const botoes = document.querySelectorAll('.fazer-pedido');
const modal = document.getElementById('modal');
const nomeModal = document.getElementById('modal-nome');
const descricaoModal = document.getElementById('modal-descricao');
const precoModal = document.getElementById('modal-preco');
const quantidade = document.getElementById('qtd');
const totalAmount = document.getElementById('total-amount');
const whatsappBtn = document.getElementById('modal-whatsapp');

// ===============================
// ABRIR MODAL
// ===============================
botoes.forEach(btn => {
  btn.addEventListener('click', () => {

    nomeAtual = btn.dataset.nome;
    const descricao = btn.dataset.descricao;
    precoAtual = parseFloat(btn.dataset.preco);

    quantidade.value = 1;

    nomeModal.textContent = `🍔 ${nomeAtual}`;
    descricaoModal.textContent = descricao;
    precoModal.textContent = precoAtual.toFixed(2);
    totalAmount.textContent = precoAtual.toFixed(2) + '€';

    modal.showModal();
  });
});

// ===============================
// ATUALIZAR TOTAL
// ===============================
quantidade.addEventListener('input', () => {
  const qtd = parseInt(quantidade.value) || 1;
  const total = precoAtual * qtd;
  totalAmount.textContent = total.toFixed(2) + '€';
});

// ===============================
// ENVIAR WHATSAPP
// ===============================
whatsappBtn.addEventListener('click', () => {

  const qtd = parseInt(quantidade.value);
  if (qtd < 1 || isNaN(qtd)) {
    alert("Digite uma quantidade válida");
    return;
  }

  const total = (precoAtual * qtd).toFixed(2);

  const mensagem = `
Olá! Quero fazer um pedido 🍔

Produto: ${nomeAtual}
Quantidade: ${qtd}
Preço unitário: ${precoAtual.toFixed(2)}€
Total: ${total}€
  `.trim();

  const url = `https://wa.me/927217208?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});
