import React, { Component } from 'react';

class HornedBeast extends Component {

    constructor(props) {
        super(props)
        this.state = {
           vote:0
        }
        
    }
    voteCount = () => {
        this.setState({
            vote: this.state.vote + 1
            // console.log('hii');
        })
    }

    render() {

        

        return (
            <div>
                <h2>Title:{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} />
                <p>Description:{this.props.description}</p>
                <button onClick={this.voteCount}>Vote</button>
                {/* <h3>{this.props.totalVotes}</h3> */}
            </div>
        )
    }
}

export default HornedBeast
