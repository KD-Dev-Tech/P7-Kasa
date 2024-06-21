import Banner from '../components/Banner';
import img from '../assets/images/banner-about.png'
import Dropdown from '../components/Dropdown';
import Info from'../data/apropos.json'


function About() {
    
    Info.map(() => {
    //    console.log(Info);
    });
   
    return (
        <div className="home">
            <Banner src={img} />
           <div className='MenuDropDown'>
            {[...Info].map((info, index) => {
                return (
                    <Dropdown key={index} 
                        title={info.title} 
                        description={info.description} />
                )
            })}
            

           </div>
        </div>
    );
}

export default About;