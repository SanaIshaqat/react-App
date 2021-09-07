import { React, Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavCust from "./components/NavCust";
import HbModal from "./components/HbModal";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showModal:false,
      image_url:"",
      title:"",
      description:"",
     
     
 
    }
  }
  handleClose=()=>{
    this.setState({
      showModal:false
    })
  }
  handleOpen=(image_url,title,description)=>{
    this.setState({
      showModal:true,
      image_url:image_url,
      title:title,
      description:description,
    })
  }
  render() {
    return (
      <div>
        <HbModal handleClose={this.handleClose} showModal={this.state.showModal} image_url={this.state.image_url} title={this.state.title} description={this.state.description}/>
        <NavCust/>
        <Header/>
        <Main handleClose={this.handleClose} handleOpen={this.handleOpen} />
        <Footer/>
      </div>
    )
  }
}

export default App
