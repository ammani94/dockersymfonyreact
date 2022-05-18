import './ToDoList.css';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            items : [{name:''}],
            count : null
        };
    }

    componentDidMount() {

        fetch('http://localhost:8080/to/do/listnew')
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

    handleChangeItems = (idx) => (evt) => {

        var new_items = this.state.items.slice();
        new_items.map((item,index) => {

            if (index !== idx) {
                return item;
            } else {
                item['name'] = evt.target.value;
                return item;
            }
        });
        this.setState({
            items : new_items
        });
    }

    handleAddItem = () => {

        var new_items = this.state.items.slice();
        new_items.push({name : ''});
        this.setState({
            items:new_items
        });
    }

    handleRemoveItem = (idx) => (evt) => {

        var new_items = this.state.items.slice();
        new_items.splice(idx, 1);
        this.setState({
            items:new_items
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await fetch("http://localhost:8080/to/do/add", {
                method: "POST",
                body: JSON.stringify({
                    data: this.state.items,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                alert(resJson.message);
            } else {

            }
        } catch(err) {
            console.log('err',err);
        }


    }

    render() {
        const {error,isLoaded,items,count} = this.state;

        if (!isLoaded) {
            return (
                <div>
                    Chargement
                </div>
            );
        }
        var length = this.state.items.length;


            return (
                <div>

                    <h1>TO-DO LIST</h1>
                    <form onSubmit={this.handleSubmit}>
                    {this.state.items.map((item,index) => (
                        <div className="items">
                            <input
                            key={index}
                            type="text"
                            value={item.name}
                            onChange={this.handleChangeItems(index)}
                            />
                            <input type="button" className="plus" onClick={this.handleAddItem} value="+" />
                            {length > 1 &&
                                <input type="button" className="minus" onClick={this.handleRemoveItem(index)} value="-" />
                            }

                        </div>
                    ))}
                    <input type="submit" value="Enregistrer" />
                    </form>
                </div>
            );
    }


}

export default ToDoList;

