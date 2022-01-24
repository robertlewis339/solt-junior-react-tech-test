import React from 'react';
import './SellableShow.css';



function SellableShow({ item }) {

    const findUrl = (tests) => {
        const tktsUrlCheck = tests.find(test => test.url.includes('tktsonline.seetickets.com'));
        if (tktsUrlCheck) {
            return tktsUrlCheck.url
        }
        const oltrUrlCheck = tests.find(test => test.url.includes('officiallondontheatre.seetickets.com'));
        if (oltrUrlCheck) {
            return oltrUrlCheck.url
        }
    }

    return (
        <div className="SellableShow">
            <img src={item.image} alt="Show Picture" />
            <h1 className="title">{item.title}</h1>
            <h3><a href={item.url}>About The Show</a></h3>
            <a className="button" href={findUrl(item.see_tickets_url_infos)}>Book Now</a>
        </div >
    );
}

export default SellableShow;