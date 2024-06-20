import { useParams } from "react-router-dom";
import Carousel from "../components/logement/Carousel";
import LocationLogement from "../components/logement/LocationLogement";
import Tags from "../components/logement/Tags";
import Rating from "../components/logement/Rating";
import Host from "../components/logement/Host";
import LogementId from "../data/logements.json"
import Error404 from "./Error404";
import DropDown from "../components/Dropdown";



function Logement () {
    const { id } = useParams();
    const logement = LogementId.find(logement => logement.id === id);
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
            <div className="MenuDropDownPropos">
                <DropDown 
                    title="Description" 
                    description={logement.description} />

                <DropDown title="Equipements" 
                    description={logement.equipments.map(equipment => <li key={equipment}>{equipment}</li>)} /> 
            </div>
            
        </div>
        
    );
    
}
export default Logement;
