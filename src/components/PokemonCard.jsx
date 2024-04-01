const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];



function PokemonCard (){

    const pokemon = pokemonList[0];

    return <p>{!pokemon.imgSrc ? ("???") :
        ( <figure className="card">
        <img 
        src= {pokemon.imgSrc}
        alt="Image du Pokemon"
        className="card-img"
        />
        <figcaption>
        {pokemon.name}
        </figcaption>
        </figure>)
        }</p> ;

}

export default PokemonCard;

