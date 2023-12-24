import React from 'react';

import TemplateBuilds from "../components/PCTemplates";
import "./PcBuilderPage.css";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

import { PartsTable } from '../components/PartsTable';

export const BuildPage = () => {
    const { buildNum } = useParams();
    return ( // this stuff is JSX
        <div className="full">
            <PartsTable buildNum={buildNum}/>
        </div>
    );
}