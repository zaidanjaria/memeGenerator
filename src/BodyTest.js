import React, { Component } from "react";

class BodyTest extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      loading : true,
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => {
      this.setState({todo : json , loading : false})
      console.log(this.state);
    });
  }
    getdata = () =>  {
        fetch("https://swapi.co/api/planets/5")
      .then(response => response.json())
      .then(json => {
        this.setState({todo : json})
        console.log(this.state);
      });

  }
  render() {
    console.log(this.props);
    var text = this.state.loading ? "Loading ...  ": this.state.todo;
    return <div className="container">
        <p>{JSON.stringify(text)}</p> <br />
    <button className="btn btn-primary" onClick={this.getdata}>Click</button>
    </div>;
  }
}

export default BodyTest;
