import LoginPanel from "../components/LoginPanel";
import SignUpPanel from "../components/SignUpPanel";


export const LoginPage = () => {
    return ( // this stuff is JSX
        true ? <LoginPanel /> : <SignUpPanel/>
    );
}