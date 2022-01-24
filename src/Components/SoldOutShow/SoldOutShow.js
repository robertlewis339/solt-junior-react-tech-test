import React from 'react';
import './SoldOutShow.css';



function SoldOutShow({ item }) {
    return (
        <div className="SoldOutShow">
            <img src={item.image} alt="Show Image" />
            <h1 className="title">{item.title}</h1>
            <h3>SOLD OUT</h3>
        </div>
    );
}

export default SoldOutShow;




