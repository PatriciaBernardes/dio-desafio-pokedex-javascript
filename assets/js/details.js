const pokemonListDetails = document.getElementById('pokemonListDetails')
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name")
const type = urlParams.get("type")



pokeApi.getPokemonDetails(name).then((details) => {
    document.querySelector('#name').innerHTML = details.name;
    document.querySelector('#number').innerHTML = `# ${details.number}`;
    document.querySelector('.details #abilities').innerHTML = `Habilidades: ${details.abilities.map((ability) => `${ability}`).join(', ')}`
    document.querySelector('#pokemon').src = details.photo;
    document.querySelector('.details #type').innerHTML = `Tipo: ${type}`;
    document.querySelector('.details #species').innerHTML = `Espécie: ${details.species}`;
    document.querySelector('.details #height').innerHTML = `Altura: ${details.height}`;
    document.querySelector('.details #weight').innerHTML = `Peso: ${details.weight}`;


})