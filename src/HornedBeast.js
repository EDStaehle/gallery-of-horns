import React from "react";

import './HornedBeasts.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: '',
      favnum: 0,
      favstop: '',
    };
  };
  handlefavs = (event) => {
    let stop = document.querySelector(`[alt='${event.target.alt}']`)
    this.state.favnum !== 10? this.setState({
      favs: this.state.favs + '❤️',
      favnum: this.state.favnum + 1,
    })

    : this.setState({
     favstop: 'Only 10 hearts allowed',
    })
    if(this.state.favnum >= 10){
      stop.removeEventListener('click', this.handlefavs);
      console.log('hello');
    }
    console.log(this.handlefavs);
  }
  render() {
    
    return (
      <article>
        <Card >
          
          <Card.Img variant="top"
            onClick={this.state.favstop ?()=>{} : this.handlefavs}
            title={this.props.title}
            src={this.props.image_url}
            alt={this.props.title}
            id={this.props._id}
            />
            <Card.Body>
            <p> Number of ❤️ = favs:{this.state.favs}</p>
            <p>{this.state.favstop}</p>
           <Card.Title><h3>{this.props.title}</h3></Card.Title>
          <p>{this.props.description}</p>
          </Card.Body>
        </Card>
      </article >
    )
  }
}
export default HornedBeast; 