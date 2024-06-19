import { useParams } from "react-router-dom";
import Carousel from "../components/logement/Carousel";
import LocationLogement from "../components/logement/LocationLogement";
import Tags from "../components/logement/Tags";
import Rating from "../components/logement/Rating";
import Host from "../components/logement/Host";
import LogementId from "../data/logements.json"
import Error404 from "./Error404";

function Logement () {
    const { id } = useParams();
    const logement = LogementId.find((logement) => logement.id === id);
    if (!logement) {
        return <Error404/>;
    }

    return (
        <div>
            <Carousel />
            <LocationLogement />  
            <Tags />
            <Rating />
            <Host />
            
        </div>
    );
}
export default Logement;