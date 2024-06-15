import Logement from '../data/logements.json';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
        <div className='gallery'>
            {Logement.map((logement) => (
              <Link to={`/logements/${logement.id}`} className='gallery-item' key={logement.id}>  
                <img src={logement.cover} alt={logement.title} />
                <h3>{logement.title}</h3>
              </Link>
            ))}
        </div>
  );
}
export default Gallery;