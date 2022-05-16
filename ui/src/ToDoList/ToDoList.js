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

    render() {
        const {error,isLoaded,items,count} = this.state;

        var length = this.state.items.length;

        console.log(length);


            return (
                <div >
                    <h1>TO-DO LIST</h1>
                    {this.state.items.map((item,index) => (
                        <div className="items">
                            <input
                            key={index}
                            type="text"
                            value={item.name}
                            onChange={this.handleChangeItems(index)}
                            />
                            <button className="plus" onClick={this.handleAddItem}>+</button>
                            {length > 1 &&
                                <button className="minus" onClick={this.handleRemoveItem(index)}>-</button>
                            }

                        </div>
                    ))}
                </div>
            );
    }


}

export default ToDoList;

