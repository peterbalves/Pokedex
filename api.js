let quantidade = document.getElementById('quantidade');
quantidade.addEventListener('change',()=>{
    pegaPoke(quantidade.value);
});
pegaPoke(2)
function pegaPoke(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        let pokemons = [];

        allpokemon.results.map((val) => {

            fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle => {
                    pokemonSingle.sprites.front_default;
                    pokemons.push({ nome: val.name, imagem: pokemonSingle.sprites.front_default });
                    
                    if(pokemons.length == quantidade) {


                        let pokeBoxes = document.querySelector('.pokemon-boxes')
                        pokeBoxes.innerHTML = "";

                        pokemons.map((val)=>{
                           pokeBoxes.innerHTML+=`


                           <div class="pokemon-boxes">
                               <img src="${val.imagem}"/>
                               <p>${val.nome}</p>
                           </div>

                           
                           `;
                        });
                    }

                });

        });

    });
}