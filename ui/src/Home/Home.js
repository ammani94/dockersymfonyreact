import './Home.css';
import React from 'react';
//import styled from 'styled-components';
import EssayForm from './../EssayForm/EssayForm';


class Home extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         error : null,
    //         isLoaded : false,
    //         items : []
    //     };
    // }

    // componentDidMount() {

    //     fetch('http://localhost:8080/brand/new')
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             this.setState({
    //                 isLoaded : true,
    //                 items : result
    //             });
    //         },
    //         (error) => {
    //             this.setState({
    //                 isLoaded : true,
    //                 error
    //             });
    //         }
    //     )
    // }

    render() {
        // const { error,isLoaded,items} = this.state;
        // console.log(items);
        return (
          <div>
          <EssayForm/>
          </div>
        );

      }


}

export default Home;

