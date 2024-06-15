import { useParams } from "react-router-dom"; 
import { useState } from "react";
import logement from '../data/logements.json';

const SlideShow = () => {
    const { id } = useParams();
    const logementData = logement.find((logement) => logement.id === id);
    const [index, setIndex] = useState(0); 
    const chevronLeft = "fa-solid fa-chevron-left";
    const chevronRight = "fa-solid fa-chevron-right";
  
    const right = () => { 
      setIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex >= logementData.pictures.length) {
          newIndex = 0;
        }
        return newIndex;
      });
    };
  
    const left = () => { 
      setIndex((prevIndex) => {
        let newIndex = prevIndex - 1;
        if (newIndex < 0) {
          newIndex = logementData.pictures.length - 1;
        }
        return newIndex;
      });
    };
  
    return (
        <div className="carousel">
          <img src={logementData.pictures[index]} alt={logementData.title} /> 
          {logementData.pictures.length > 1 && ( 
            <>
              <p>{index + 1}/{logementData.pictures.length}</p>
              <div className="arrow">
                <i className={chevronLeft} onClick={left}></i> 
                <i className={chevronRight} onClick={right}></i> 
              </div>
            </>
          )}
        </div>
    );
  }
  
  export default SlideShow;