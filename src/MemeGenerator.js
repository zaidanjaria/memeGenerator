import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allImageData: ""
    };
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => {
        const { memes } = res.data;
        console.log(memes);
        this.setState({
          allImageData: memes
        });
      });
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };
  handleSubmit = event => {
    event.preventDefault();
    let index = Math.floor(Math.random() * 100);
    let randomImg = this.state.allImageData[index].url;
    this.setState({
      randomImage: randomImg
    });
    // this.setState(prevState => {
    //   return {
    //     topText: prevState.topText,
    //     bottomText: prevState.bottomText,
    //     randomImage: randomImg.url,
    //     allImageData: prevState.allImageData
    //   };
    //});
    console.log(this.state);
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-5">
              <input
                type="text"
                name="topText"
                value={this.state.topText}
                onChange={this.handleChange}
                class="form-control"
                placeholder="TopText"
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                name="bottomText"
                value={this.state.bottomText}
                onChange={this.handleChange}
                class="form-control"
                placeholder="BottomText"
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Generate
              </button>
            </div>
          </div>

          <div className="imgcontainer">
            <img
              src={this.state.randomImage}
              width="60%"
              height="500px"
              alt="memes image"
            ></img>
            <h2 className="top-left">{this.state.topText}</h2>
            <h2 className="bottom-left">{this.state.bottomText}</h2>
          </div>
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
