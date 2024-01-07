import Badge from 'react-bootstrap/Badge';
import './../pages/HomePage.css';

export default function HomePageDescriptions() {
    return (
        <div>
            <div className='top-btn-block'> 
                <h1> Once Upon a Time...</h1>
                <p>
                    When gamers, causal or committed, wanted the latest and greatest in personal computing technologies, 
                    they'd have the expensive source the parts themselves, research what works with what, and make guesses as to what
                    the best tradeoffs are to keep from breaking the whole piggy bank.
                </p>
            </div>
            <div className='top-btn-block'> 
                <h1> Well not anymore. </h1>
                <p>
                    Here at shafaath, we've already done the sourcing, and research, and know all the best tradeoffs for your 
                    specific needs. <b>We remove the guess work from PC building for your peace of mind.</b> And by peace of mind, we 
                    mean not having to worry about buying and assembling all the parts only to find your new PC not turning on. We
                    deliver the highest quality and guarantee any defective service will be fully refunded and fixed (right yu?). 
                </p>
            </div>
            <div className='top-btn-block'>
                <h1> How Does This Work </h1>
                <p>
                    First, you can design your dream PC in our design studio (make this a button). At each stage, select the part you
                    want and read up on the provided expert opinion. If you make an account with us, you can save your build and return
                    to it later. Once you submit a build, one of our nerds will get back to you in a few (timeframe yu) to confirm. Then,
                    in a few days, your PC will arrive at your door ready to go! If at any point, you're stuck with your build, just submit
                    a review form and one of our nerds will be in touch for free (yea????) consultation.
                </p>
            </div>
        </div>
    );
};
