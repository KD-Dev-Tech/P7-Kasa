
import Banner from "../components/Banner";
import CardGallery from "../components/CardGallery";
import BannerHome from "../assets/images/banner-home.png";

function Home() {
    return (
        <div className='home'>
            <Banner src={BannerHome} text='Chez vous, partout et ailleurs' />
            <CardGallery />
        </div>
    );
}
export default Home;