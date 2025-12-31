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

const botoes = document.querySelectorAll('.fazer-pedido');
const modal = document.getElementById('modal');
const nomeModal = document.getElementById('modal-nome');
const descricaoModal = document.getElementById('modal-descricao');
const precoModal = document.getElementById('modal-preco');
const quantidade = document.getElementById('qtd');
const totalAmount = document.getElementById('total-amount');
const whatsappLink = document.getElementById('modal-whatsapp');




botoes.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Pega os dados do card
    const nome = btn.dataset.nome;
    const descricao = btn.dataset.descricao;
    const preco = parseFloat(btn.dataset.preco);





    // Preenche o modal
    nomeModal.textContent = `🍔 ${nome}`;
    descricaoModal.textContent = descricao;
    precoModal.textContent = preco.toFixed(2);
    totalAmount.textContent = preco.toFixed(2) + '€';

    // Atualiza link do WhatsApp com pedido (opcional)
    whatsappLink.href = `https://wa.link/hqr4e9?text=Quero%20pedir%201%20x%20${encodeURIComponent(nome)}%20por%20${preco.toFixed(2)}€`;

    // Mostra modal
    modal.showModal();
  });
});

// Atualiza total ao mudar quantidade
quantidade.addEventListener('input', () => {
  const preco = parseFloat(precoModal.textContent);
  totalAmount.textContent = (preco * quantidade.value).toFixed(2) + '€';
});
