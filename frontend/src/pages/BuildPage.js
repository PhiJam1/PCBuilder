import React from 'react';

import TemplateBuilds from "../components/PCTemplates";
import "./PcBuilderPage.css";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export const BuildPage = () => {
    const { orderNum } = useParams();
    return ( // this stuff is JSX
        <div className="full">
            <h1>Build page</h1>
        </div>
    );
}