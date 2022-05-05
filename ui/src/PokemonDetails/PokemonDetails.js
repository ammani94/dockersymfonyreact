import './PokemonDetails.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
//import reportWebVitals from './reportWebVitals';

export default function PokemonDetails() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/pokemon/new", {
        method: "POST",
        body: JSON.stringify({
          pokemon_id: data.id
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log('resJson',resJson);
      } else {

      }
    } catch (err) {
      console.log('err',err);
    }
  };


    const [data, setData] = useState(null);
    const [id, setId] = useState(null);
    let location = useLocation();
    useEffect(() => {
      const fetchData = async () => {

        const response = await fetch(location.state.url);
        const newData = await response.json();
        setData(newData);
        setId(newData.id);
      };
      fetchData();
    }, []);
    if (data) {
        //console.log(data);
      return <div>
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Enregistrer"/>

        </form>

        <ul>

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

