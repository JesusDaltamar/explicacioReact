import {Link, link} from "react-router-dom"

function CardRazaPerros({nombreRaza,imagen}){
    return(
        <li className="breedCard">
            <Link to="/rhodesian">
            <div className="contenedorImagen">
                <img src={imagen} alt={nombreRaza}/>
                </div>
            </Link>
            <span className="breedTitle">{nombreRaza}</span>
        </li>
    )
}

export default CardRazaPerros