function NavBar({pokemonIndex, pokemonList, setpokemonIndex}){

        return (
        <>
        {pokemonIndex < pokemonList.length - 1 ? (<button onClick={() => {setpokemonIndex(pokemonIndex + 1)}}>SUIVANT</button>)
        : null}
        {pokemonIndex > 0 ? (<button onClick={() => {setpokemonIndex(pokemonIndex - 1)}}>PRECEDENT</button>)
         : null}
         </>
         
         )
         
         

}

export default NavBar;