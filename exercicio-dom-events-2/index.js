document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    atualizaStatus();

    document.querySelector('#btn-cadastrar').addEventListener('click', btnCadastrarClick);
}

function btnCadastrarClick() {
    const form = document.querySelector('.form-acao');
    const acao = form.acaoInput.value;
    const cotacao = form.cotacaoInput.value;

    const row = document.createElement('tr');
    row.classList.add("acao");
    
    const infoAcao = document.createElement('td');
    infoAcao.classList.add("acao-nome")
    
    const infoCotacao = document.createElement('td');
    infoCotacao.classList.add("acao-cotacao")
    
    const tdStatus = document.createElement('td');
    tdStatus.classList.add("acao-status");

    const spanStatus = document.createElement('span');
    spanStatus.classList.add("badge");
    spanStatus.textContent = "---";

    infoAcao.textContent = acao;
    infoCotacao.textContent = cotacao;

    row.appendChild(infoAcao);
    row.appendChild(infoCotacao);
    tdStatus.appendChild(spanStatus);
    row.appendChild(tdStatus);

    const tabela = document.querySelector('.tabela-acoes tbody');
    tabela.insertBefore(row, tabela.childNodes[1]);
    
    atualizaStatus();
}

function atualizaStatus() {
    const acoes = document.querySelectorAll('.acao');

    acoes.forEach(acao => {
        const cotacao = parseInt(acao.querySelector('.acao-cotacao').textContent);
        acaoStatusTd = acao.querySelector('.acao-status').querySelector('.badge');

        acaoStatusTd.classList.add(cotacao > 50 ? 'badge-danger' : 'badge-success');
        acaoStatusTd.textContent = (cotacao > 50 ? 'Vender' : 'Comprar');
        if(cotacao == 50){
            acaoStatusTd.classList.add('badge-info');
            acaoStatusTd.textContent = 'Manter';
        }
    });
}