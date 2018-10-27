
const acoes = document.querySelectorAll('.acao');

acoes.forEach(acao => {
    const cotacao = parseInt(acao.querySelector('.acao-cotacao').textContent);
    acaoStatusTd = acao.querySelector('.acao-status').querySelector('.badge');
    
    if(cotacao > 50){
        acaoStatusTd.classList.add('.badge-danger');
        // acaoStatusTd.querySelector('.badge')
        // acaoStatusTd.textContent = "Vender";
        // acaoStatusTd.textContent = "<span class='badge badge-danger'>Vender</span>";
    }else if(cotacao < 50){
        // acaoStatusTd.textContent = "Comprar";
        // acaoStatusTd.textContent = `<span class="badge badge-success">Comprar</span>`;
    }else{
        // acaoStatusTd.textContent = "Manter";
        // acaoStatusTd.textContent = `<span class="badge badge-info">Manter</span>`;
    }
});