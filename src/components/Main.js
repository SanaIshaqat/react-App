import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'



class Main extends Component {
    
  

render() {
    
    
    return (
        <div className="row">
            {
                data.map(ele => {
                    return <HornedBeast handleClose={this.props.handleClose}
                    handleOpen={this.props.handleOpen}
                     title={ele.title} 
                     description={ele.description} 
                     image_url={ele.image_url} 
                     keyword={ele.keyword} 
                     horns={ele.horns} />
                })
            }
            
            
            </div>
    )
}
}

export default Main







