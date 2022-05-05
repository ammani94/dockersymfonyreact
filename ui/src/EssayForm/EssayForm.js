
import React, { useEffect, useState } from 'react';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Écrivez un essai à propos de votre élément du DOM préféré',
      error : null,
      isLoaded : false,
      items : []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/brand/new", {
        method: "POST",
        body: JSON.stringify({
          pokemon_id:3
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

  // handleSubmit(event) {
  //   //alert('Un essai a été envoyé : ' + this.state.value);
  //   const url = 'http://localhost:8080/brand/new'
  //   //console.log(email)
  //   const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ pokemon_id:3 })
  //   };
  //   fetch(url, requestOptions)
  //       .then(response => console.log('response',response))
  //       .catch(error => console.log('Form submit error', error))
  //   event.preventDefault();
  // }

//   componentDidMount() {

//     fetch('http://localhost:8080/brand/new')
//     .then(res => res.json())
//     .then(
//         (result) => {
//             console.log(result);
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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default EssayForm;
