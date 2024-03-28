import React, { Component } from 'react'
import bella from "./bella.png"
import bellb from "./bellb.png"

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Pranav Suriya",
         sub : "SUbscribe",
         img: bellb
      }
    }
    styles={
        fontStyle: "italic",
        color: "purple"
      };
      Buttonchange = () =>{
        this.setState({
            message: "Hit the bell icon to never miss updates",
            sub: "Subscribed",
        })
      }

      Imgchange = () =>
      {
        this.setState({
            img : bella,
            message: "thank you hapy learning"
        })
      }
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p/>

        <img style={{height: "30px", width: "30px"}} src= {this.state.img} onClick={this.Imgchange}></img>
      </div>
    )
  }
}

export default NewComp