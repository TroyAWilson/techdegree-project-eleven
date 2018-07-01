import React from 'react';
import {Link,Route,BrowserRouter} from 'react-router-dom';

class Buttons extends React.Component{

  state = {
    buttonText: ''
  }

onButtonClick = e => {
    this.setState({buttonText: e.target.text},
    function () {this.props.onClick(this.state.buttonText);});
}

handleSubmit = e => {
  console.log(e.target);
  e.preventDefault();
  // this.props.onClick(this.state.buttonText);
}


  render(){
    return(
      <BrowserRouter >
        <Route>
          <ul className="search-buttons-container" onClick={this.handleSubmit}>
            <li onClick={this.onButtonClick} className="search-button"><Link onClick={this.onButtonClick} to="/cat">Cat</Link></li>

            <li onClick={this.onButtonClick} className="search-button"><Link to="/dog">Dog</Link></li>

            <li onClick={this.onButtonClick} className="search-button"><Link to="/coffee">Coffee</Link></li>
          </ul>
        </Route>
      </BrowserRouter>
    );
  }
}
 export default Buttons;
