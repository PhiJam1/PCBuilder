import HomePageLoginPrompt from '../components/HomePageLoginPrompt.js';
import  HomePageDescriptions  from '../components/HomepageDescriptions.js';
import HomePageDSBTN from '../components/HomePageDSBTN.js';
export const HomePage = () => {
    return ( // this stuff is JSX
    <div className="homepage">
        <div className='top-half'>
            <HomePageLoginPrompt />
            <br></br>
            <HomePageDSBTN />
        </div>
        <div>
            {/*<HomePageDescriptions />*/}
        </div>
    </div>
    
    );
}