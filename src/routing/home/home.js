import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      number: 4,
      phrase: "hi five",
    }
  }
  
  componentDidMount() {
    this.sanitizeData();
  }

  fetchData = (url) => {
     return fetch(url)
      .then(response => {return response.json()})
      .catch(error => console.error(error));

  }

  sanitizeData = (url = `people/1/`) => {
    console.log(`https://swapi.co/api/${url}`)
    this.fetchData(`https://swapi.co/api/${url}`).then(result => {this.setState({
      data: result
    })});
  }

  render() {
    const { data } = this.state;
    console.log(this.state);
    console.log(data);
    return (
      <div>
        {!!data && !!data.name && (
        <div>
          <h1>Name: {data.name}</h1>
            <p>List of films: </p>
              <ol>{data.films.map((film, index) => { 
                return <li key={index}><a href={film}>{film}</a></li>
                })}
              </ol>
            
        </div>
        )}
      </div>
    );
  }
}
