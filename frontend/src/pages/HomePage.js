import HomePageLoginPrompt from '../components/HomePageOrderStatusBTN.js';
import  HomePageDescriptions  from '../components/HomepageDescriptions.js';
import HomePageDSBTN from '../components/HomePageDSBTN.js';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const HomePage = () => {
    return ( // this stuff is JSX
    
    <div className='homepage-full'>
        {/* <Row> */}
        <div className='homepage-background1'>
            <div className="homepage-top">
                <h1 style={{fontSize: '4rem'}}>This Is Going To Be</h1>
                <h1 style={{fontSize: '6rem'}}>Awesome . . .</h1>
                <div className='top-half'>
                    <HomePageDSBTN />
                    <HomePageLoginPrompt />
                </div>
            </div>
        </div>
        {/* </Row>
        <Row> */}
        <div className="homepage-bottom-background">
            <div className="bottom-half">
                <HomePageDescriptions />
            </div>
        </div>
        {/* </Row> */}
    </div>
    
    );
}