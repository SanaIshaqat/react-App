import React, { Component } from 'react';

class HornedBeast extends Component {

    render() {
        return (
            <div>
                <h2>Title:{this.props.title}</h2>
                <img src={this.props.imgSrc} alt={this.props.title} />
                <p>Description:{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast
