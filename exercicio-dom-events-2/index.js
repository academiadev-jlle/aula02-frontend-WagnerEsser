document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    buscaPokemons();

    document.querySelector('#btn-buscar').addEventListener('click', btnBuscarClick);
}

function btnBuscarClick() {
    const form = document.querySelector('.search-form');
    const id = form.searchInput.value;
    document.querySelector('.tabela-pokemons tbody').textContent = "";
    buscaPokemons(id);
}

function buscaPokemons(id=null, urlDefault='https://pokeapi.co/api/v2/pokemon-species/') {
    const apiURL = (id ? `https://pokeapi.co/api/v2/pokemon-species/${id}/` : urlDefault);
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', apiURL, true);
    xmlHttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            const result = JSON.parse(this.responseText);
            if (id || urlDefault != 'https://pokeapi.co/api/v2/pokemon-species/') {
                adicionaPokemon(result);
            }else{
                result.results.slice(0,10).forEach(poke => buscaPokemons(null, poke.url));
            }
        }
    }
    xmlHttp.send();
}

function adicionaPokemon(poke){
    const tr = document.createElement('tr');
    const td_nome = document.createElement('td');
    const td_base_happiness = document.createElement('td');
    const td_cor = document.createElement('td');
    const td_shape = document.createElement('td');

    td_nome.textContent = poke.name;
    td_base_happiness.textContent = poke.base_happiness;
    td_cor.textContent = poke.color.name;
    td_shape.textContent = poke.shape.name;

    tr.appendChild(td_nome);
    tr.appendChild(td_base_happiness);
    tr.appendChild(td_cor);
    tr.appendChild(td_shape);

    document.querySelector('.tabela-pokemons tbody').appendChild(tr);
}