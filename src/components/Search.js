import React from 'react';


class Search extends React.Component{
    state = {
      searchText: ''
    }
  onSearchChange = e => {
      this.setState({searchText: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  }

  render(){

    return(
      <form onSubmit = {this.handleSubmit}>
        <input className="main-search" type="text" placeholder="Search" onChange={this.onSearchChange} name="search"/>
        <button className="search-button-icon" type="submit">
        </button>
      </form>
    );
  }
}
 export default Search;
