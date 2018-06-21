import React, {Component} from 'react';


class Search extends React.Component{
    state = {
      searchText: ''
    }
  onSearchChange = e => {
      this.setState({searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchPics(this.state.searchText);
    e.currentTareget.reset();
  }

  render(){

    return(
      <form onSubmit = {this.handleSubmit}>
        <input className="main-search" type="text" placeholder="Search" onChange={this.onSearchChange} name="search"/>
      </form>
    );
  }
}
 export default Search;
