import React, { useEffect, useState } from 'react';
import ShowItems from '../ShowItems/ShowItems';

function Show() {
  const [data, setData] = useState([])

  const apiGet = () => {
    fetch('https://officiallondontheatre.com/wp-json/shows/all-open')
      .then(response => response.json())
      .then(json => {

      //    const todaysShows = json.filter(({ show_onsale_info }) => {
      //      const today = new Date('2021-05-17 09:00:00+00:00');
      //      const dealDate = new Date(show_onsale_info.onsale_datetime);
      //      return today.setHours(0,0,0,0) === dealDate.setHours(0,0,0,0);
      //    });
      //    setData(todaysShows)
      //    console.log(todaysShows);
      //  }

      // Using slice as an example display
      const slicedAPI = json.slice(0, 15);
      setData(slicedAPI);
      console.log(slicedAPI);    
      })};

  

  useEffect(() => {
    apiGet();
  }, [])

  return (
    <div className="shows">
      {data.length > 0 ? (
        <ShowItems data={data} />
      ) : <p>No deals today</p>}
    </div>
  )
};


export default Show;

