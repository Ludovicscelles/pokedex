import PropTypes from "prop-types";




function PokemonCard ({props}){
  const { pokemon } = props;

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

{PokemonCard.propTypes = {
    pokemon : PropTypes.shape(
        {name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string}
        ).isRequired
    }
  }

export default PokemonCard;

