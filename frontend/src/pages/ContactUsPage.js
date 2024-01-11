import { DesignStudioBTN } from "../components/DesignStudioBTN";
import './ContactUsPage.css';

export const ContactUsPage = () => {
    return ( // this stuff is JSX
    <div className="right">
        <div className="left">
            <h1> Contact Information </h1>
            <hr className="line"></hr>
            <p>Phone Number: +1 (***) - *** ****</p>
            <p>Email: email@email.com</p>
            <h1> About Us</h1>
            <hr className="line"></hr>
            <p>The hardest part about PC building is not sourcing materials, finding the best deals, or configuring the more optimal RGB set up.
                The hardest part is knowing what build will satisfy your requirements, keeping all parts compatible, and under budget. For that, 
                we offer our free consulting sessions. <br />
                Here is how to get started:
                    <ol>
                        <li>Enter the design studio</li>
                        <p>You can start with a template build based off of your needs, or you can start completely from scratch. </p>
                        <li>Customize your selection by choosing/swapping out parts for each component.</li>
                        <p>Read up on expert advice about each component and choose parts from our catalog. </p>
                        <li>Submit your Build!</li>
                        <p>We'll set up a consulting session where we ensure you're getting exactly what you want.</p>
                    </ol>
                
            </p>
        </div>
        
    </div>
        
    );
}