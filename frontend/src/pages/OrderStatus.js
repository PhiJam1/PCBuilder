import React from 'react';
import "./OrderStatus.css";
import { useParams } from 'react-router-dom';
import OrderQuery from '../components/OrderQuery';


export const OrderStatus = () => {
    const { buildNum } = useParams();

    return ( // this stuff is JSX
        <div>
            {!buildNum ? <OrderQuery /> : <h1>Here is your build + {buildNum} </h1>}
        </div>
    );
}