import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    text: ''
  }

  static propTpyes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === ''){
      this.props.showAlert("Please enter a user." , "light" )
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({text: ''}) 
    }
  }

  render() {

    const { showClear, clearUsers} = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" 
            name="text" 
            placeholder="Search Users..." 
            onChange={this.onChange}            
            value={this.state.text}/>
          <input 
            type="submit" 
            value="Search" 
            className="btn btn-dark btn-block text-center"
            />
            { showClear && (<button className="btn btn-light btn-block text-center" 
              onClick={clearUsers}>Clear</button>)
            }
        </form>
      </div>
    )
  }
}

export default Search