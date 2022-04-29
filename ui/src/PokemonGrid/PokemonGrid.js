import './PokemonGrid.css';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: inline-block,;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 10em;
  margin-right: 0em;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
`;

class PokemonGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            items : []
        };
    }

    componentDidMount() {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    items : result.results
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
        //console.log(items);

        for (var i = 0; i < items.length; i++) {
            items[i]['id_pic'] = i+1;
        }

        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement</div>;
        } else {
            return (
                <div className="grid">
                      <GridWrapper>
                    {items.map((item,index) => (
                        <Link to="/details" state={{ url : item.url}} ><div className="item" key={item.name}>
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+item.id_pic+".png"} alt={index+1} />
                             {item.name}
                         </div></Link>

                    ))}
                    </GridWrapper>
                </div>
            );
        }
    }


}

export default PokemonGrid;

