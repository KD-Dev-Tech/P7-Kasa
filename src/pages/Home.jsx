
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import BannerHome from "../assets/images/banner-home.png";

function Home() {
    return (
        <div className='home'>
            <Banner src={BannerHome} text='Chez vous, partout et ailleurs' />
            <Gallery />
        </div>
    );
}
export default Home;