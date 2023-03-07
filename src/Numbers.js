import React, { Component } from 'react';

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberFact: ''
    };
  }

  componentDidMount() {
    fetch('http://numbersapi.com/random/trivia')
      .then(response => response.text())
      .then(data => this.setState({ numberFact: data }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Meaning of Numbers</h1>
        <p>{this.state.numberFact}</p>
      </div>
    );
  }
}

export default Numbers;
