import { React, Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main intVote={0}/>
        <Footer/>
      </div>
    )
  }
}

export default App
