import './PokemonDetails.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';

export default function PokemonDetails() {
    const [data, setData] = useState(null);
    let location = useLocation();
    useEffect(() => {
      const fetchData = async () => {
        //console.log(location);
        const response = await fetch(location.state.url);
        //
        const newData = await response.json();
        setData(newData);
      };
      fetchData();
    }, []);
    if (data) {
        //console.log(data);
      return <div><ul>
      <img src={data.sprites.front_default} alt="" />
      {data.abilities.map(item => (

         <li key={item.name}>
               {item.ability.name}
           </li>

      ))}
  </ul>Name : {data.name}<br /> Weight : {data.weight} <br /> Height : {data.height}</div>;
    } else {
      return null;
    }
  }

