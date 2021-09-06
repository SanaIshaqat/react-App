import React, { Component } from 'react'
import HornedBeast from './HornedBeast'




class Main extends Component {

    render() {
        let beatsArr = [{
            title: 'Deer', imgSrc:
                'https://c.files.bbci.co.uk/13E6E/production/_106481518_gettyimages-172387616.jpg', description:
                'Members of the deer family typically have compact torsos with long, slender legs and small tails and most males have antlers.'
        },
        {
            title: 'Goat', imgSrc: 'https://i.guim.co.uk/img/media/583b1b167c0b51719de576054d524326e577b21f/0_206_4488_2693/master/4488.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ba906790f1765ad66555e0b5f7ffeac7', description:
                'Goat has horns that arch backward, a short tail, and straighter hair. Male goats, called bucks or billys, usually have a beard. Females are called does or nannys, and immature goats are called kids.'
        }]
        return (
            <div>
                {
beatsArr.map(ele=>{
    return <HornedBeast title={ele.title} description={ele.description} imgSrc={ele.imgSrc}/>
})
                }
            </div>
        )
    }
}

export default Main







