import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'



class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stateVote: this.props.intVote,
        };
        voteCount = () => {
            this.getState({
                vote: this.state.stateVote + 1
            })
        }
    }
    

    

render() {
    
    
    return (
        <div>
            {
                data.map(ele => {
                    return <HornedBeast title={ele.title} description={ele.description} image_url={ele.image_url} />
                })
            }
            
            {/* <HornedBeast totalVotes={this.state.stateVote}/> */}
            </div>
    )
}
}

export default Main







