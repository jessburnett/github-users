import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const Search = ({ showClear, clearUsers, showAlert }) => {
  const githubContext = useContext(GithubContext);
  const  [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === ''){
      showAlert("Please enter a user." , "light" )
    } else {
      githubContext.searchUsers(text);
      setText(''); 
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" 
          name="text" 
          placeholder="Search Users..." 
          onChange={onChange}            
          value={text}/>
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

Search.propTpyes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
}

export default Search