import HomePageLoginPrompt from '../components/HomePageLoginPrompt.js';
import  HomePageDescriptions  from '../components/HomepageDescriptions.js';
import HomePageDSBTN from '../components/HomePageDSBTN.js';
export const HomePage = () => {
    return ( // this stuff is JSX
    <div className='homepage-full'>
        <div className="homepage">
            <h1 style={{fontSize: '5rem'}}>This Is Going To Be</h1>
            <h1 style={{fontSize: '7rem'}}>Awesome . . .</h1>
            <div className='top-half'>
                

                <HomePageLoginPrompt />
                <br></br>
                <HomePageDSBTN />
            </div>
        </div>
        <div className="homepage2">
            <HomePageDescriptions />
        </div>
    </div>
    
    );
}