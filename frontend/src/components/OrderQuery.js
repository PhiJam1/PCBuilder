import { useNavigate } from "react-router-dom";

export default function OrderQuery() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/Design_Studio/33/`; 
        navigate(path);
    }



    return (
        <div>
            <h1>In order Query page</h1>    
         </div>
    );
};
