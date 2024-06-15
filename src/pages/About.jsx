import Banner from '../components/Banner';
import img from '../assets/images/banner-about.png'
import InfoPropos from '../components/infoPropos';

function About() {
    return (
        <div className="home">
            <Banner src={img} />
            <InfoPropos />
        </div>
    );
}
export default About;