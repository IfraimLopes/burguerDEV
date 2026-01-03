
//Mostrar e ocultar sidebar
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
const NomeUser =  document.getElementById('name')

const data = new Date();

const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();
const hora = data.getHours();
const min = String(data.getMinutes()).padStart(2, '0')
const sec = String(data.getSeconds()).padStart(2, '0')

// ===============================
// ABRIR MODAL
// ===============================
botoes.forEach(btn => {
  btn.addEventListener('click', () => {
  
    nomeAtual = btn.dataset.nome;
    const descricao = btn.dataset.descricao;
    precoAtual = parseFloat(btn.dataset.preco);
   nomeModal// ⛔ PARA TUDO AQUI.textContent = `🍔 ${nomeAtual}`;
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
  const qtd = parseInt(quantidade.value);
  const total = precoAtual * qtd;
  totalAmount.textContent = total.toFixed(2) + '€';
});

// ===============================
// ENVIAR WHATSAPP
// ===============================
whatsappBtn.addEventListener('click', (e) => {
  e.preventDefault(); //  BLOQUEIA O SUBMIT DO FORM

  const qtd = Number(quantidade.value);

  if (!qtd || qtd <= 0) {
    alert('[ERRO] Digite uma quantidade válida de hambúrguer!');
    return; 
  }

  if (!NomeUser.value || NomeUser.value.trim() === "") {
    window.alert("Erro: Digite seu nome!");
    return;
  }


  const total = (precoAtual * qtd).toFixed(2);

  const mensagem = `
Olá! Quero fazer um pedido 🍔

Nome: ${NomeUser.value}
Produto: ${nomeAtual}
Quantidade: ${qtd}
Preço unitário: ${precoAtual.toFixed(2)}€
Total: ${total}€
  `.trim();

  const url = `https://wa.me/+244927217208?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});

