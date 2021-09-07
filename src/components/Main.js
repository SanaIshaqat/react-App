import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'



class Main extends Component {
    
  

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







