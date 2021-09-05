import React, { Component } from 'react';
// import Main from './Main';

class HornedBeast extends Component {

    render() {
        return (
            <div>
                <h2>Title:{this.props.title}</h2>
                <img src={this.props.imgUrl} alt="beasts" ></img>
                <p>Description:{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast
