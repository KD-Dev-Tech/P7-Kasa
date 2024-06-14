import Logement from '../data/logements.json';

function Gallery() {
  return (
        <div className='gallery'>
            {Logement.map((logement) => (
            <div key={logement.id} className='gallery-item'>
                <img src={logement.cover} alt={logement.title} />
                <h3>{logement.title}</h3>
                
            </div>
            ))}
        </div>
  );
}
export default Gallery;