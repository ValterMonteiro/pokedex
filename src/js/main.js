import '../css/style.css'

/* selecionar os elementos do DOM */
const inputPesquisa = document.querySelector('#inputPesquisa')
const btnLocalizar = document.querySelector('#btnLocalizar')
const pokedexDisplay = document.querySelector('display')

/* adicionando os eventos */
btnLocalizar.addEventListener('click', async function(){
    /* buscar os dados na api */
     const dadosDoPokemon = await localizaPokemon(inputPesquisa.value)

    /* criar o cartao do pokemon */
    criarCartao()
})

async function localizaPokemon(termoBusca){
    const url = `https://pokeapi.co/api/v2/pokemon/${termoBusca}`

    const response = await fetch(url)
    const pokemon = await response.json()
    /* console.log(pokemon) */
    return pokemon
}


function criarCartao(pokemon){
    const cartaoPokemon = document.createElement('div')
    cartaoPokemon.className='cartaoPokemon'
    cartaoPokemon.innerHTML = `
        <img class="pokemonSprite" src="${pokemon.sprites.front_default}"/>
        <h2>${pokemon.name}<h2/>
    `

    /* adicionando ao display */
    pokedexDisplay.appendChild(cartaoPokemon)
}
