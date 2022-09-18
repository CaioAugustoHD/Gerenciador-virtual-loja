// MODAL CREATE
const btnAbrirModalCreate = document.getElementById('btnAbrirModalCreate');
btnAbrirModalCreate.addEventListener('click', abrirModalCreate);

const modalCreate = document.getElementById('modal-create'); 
const btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', validarDados);
const btnCancelar = document.querySelector('.btn-cancelar');
btnCancelar.addEventListener('click', fecharModal);

// INPUT'S
const addProduto = document.getElementById('addProduto');
const addQuantidade = document.getElementById('addQuantidade');
const addPreço = document.getElementById('addPreço');


function abrirModalCreate(){
    modalCreate.style.display = 'block';
}

function fecharModal(){
    modalCreate.style.display = 'none';
    addPreço.value = "";
    addProduto.value = "";
    addQuantidade.value = "";
}

let lojaLogada = {
    nomeLog : "",
    lojalog : "",
    cnpjlog : "",
    senhalog : "",
    indexLog : "",
    produtosLog : ""
}
const lerLojaLogada = () => lojaLogada = JSON.parse(localStorage.getItem('lojaLogada'));


// ADICIONAR PRODUTO
class produtos {
    constructor(produto, quantidade, preço){
        this.produto = produto;
        this.quantidade = quantidade;
        this.preço = preço;
    }
}


// VALIDAR DADOS DE ADC PRODUTO E ATIVAR A FUNÇÃO adicionarProduto
function validarDados(){

    if(addProduto.value.length >= 3){
        adicionarProduto();
    } else {
        alert('O nome do produto deve conter no mínimo 3 caracteres!');
    }
}

function adicionarProduto(){

    lerLojaLogada();
    
   let produto = new produtos(addProduto.value, addQuantidade.value, addPreço.value);
   lojaLogada.produtosLog.push(produto);

   localStorage.setItem('lojaLogada', JSON.stringify(lojaLogada));

   fecharModal();
}
