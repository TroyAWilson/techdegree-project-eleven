import React from 'react';
import {Link,Route,BrowserRouter} from 'react-router-dom';

class Buttons extends React.Component{

  state = {
    buttonText: ''
  }

onButtonClick = e => {
    console.log(e.target.text);
    this.setState({buttonText: e.target.text});
}

handleSubmit = e => {
  e.preventDefault();
  this.props.onClick(this.state.buttonText);
}


  render(){
    return(
      <BrowserRouter >
        <Route>
          <form className="search-buttons-container" onClick={this.handleSubmit}>
            <button onClick={this.onButtonClick} className="search-button"><Link to="/cat">Cat</Link></button>

            <button onClick={this.onButtonClick} className="search-button"><Link to="/dog">Dog</Link></button>

            <button onClick={this.onButtonClick} className="search-button"><Link to="/coffee">Coffee</Link></button>
          </form>
        </Route>
      </BrowserRouter>
    );
  }
}
 export default Buttons;
