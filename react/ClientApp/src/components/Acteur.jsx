import { Button } from "@mui/material";
import '../styles/Acteur.css'
import Picture from '../pictures/ActorPicture.jpg'
import axios from "axios";

const Acteur = (props) => {

    const actor = props.actor;

    const deleteActor = () => {
        axios.delete(`https://localhost:7293/api/Actor/deleteActor?id=${actor.id}`)
        window.location.reload(false);
    }   

    return (
        <>
        <div className="acteur-content" >
            <p className="acteur-content-name">{actor.name} {actor.lastname}</p>
            <img src={Picture}></img>
            <p>Artiestnaam: {actor.stageName}</p>
            
            <Button variant='contained' sx={{backgroundColor:'red'}} onClick={deleteActor}>Verwijder Acteur</Button>
        </div>
            
        </>
    )
}

export default Acteur;