import './PokemonCaptured.css';
import React from 'react';
import styled from 'styled-components';



class PokemonCaptured extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            message : null,
            items : []
        };
    }

    removePokemon = (i) => {
        fetch('http://localhost:8080/pokemon/captured/delete/'+i)
        .then((response) => response.json())
        .then(
            (res) => {this.setState({
                isLoaded : true,
                message : res.message,
                items:res.data
            });
            alert(res.message);
                //console.log('res',res);

            });

    }

    componentDidMount() {

        fetch('http://localhost:8080/pokemon/captured')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    items : result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded : true,
                    error
                });
            }
        )
    }

    render() {
        const { error,isLoaded,items} = this.state;

        if (!isLoaded) {
            return (
                <div>
                    Chargement
                </div>
            );
        }
       let arr = [];
       Object.keys(items).forEach(function(key,value) {
        arr.push(items[key]);
      });

        return (
            <div>
                <h1>Pokemons Capturés</h1>
                {arr.map((item,index) => (
                    <div>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+item.id+".png"} alt={index} />
                        {item.name}
                        <button onClick={() => this.removePokemon(item.id)}>X</button>
                    </div>
                ))}
            </div>

        )

        }
}

export default PokemonCaptured;

