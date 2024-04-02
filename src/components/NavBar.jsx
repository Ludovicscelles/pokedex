function NavBar({pokemonIndex, setpokemonIndex}){

        return (<p>{pokemonIndex < pokemonList.length - 1 ? (<button onClick={() => {setpokemonIndex(pokemonIndex + 1)}}>SUIVANT</button>)
        : null}
        {pokemonIndex > 0 ? (<button onClick={() => {setpokemonIndex(pokemonIndex - 1)}}>PRECEDENT</button>)
         : null}
         </p>);

}

export default NavBar;