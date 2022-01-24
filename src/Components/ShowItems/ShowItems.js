import React from 'react';
import SellableShow from '../SellableShow/SellableShow';
import SoldOutShow from '../SoldOutShow/SoldOutShow';



function ShowItems({ data }) {

    return data.map((item) => (
        <article key={item.id}>
            {item.see_tickets_url_infos.length ? (
                <SellableShow item={item}/>
            ) : (
                <SoldOutShow item={item} />
            )}
        </article>
    ))
}

export default ShowItems;