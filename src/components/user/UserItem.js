import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({user: {avatar_url, login, html_url}}) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="avatar"className="round-img" style={{ width: "60px" }}/>
      <h2>{login}</h2>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm" target="_blank">More</Link>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
