import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user: {avatar_url, login, html_url}}) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="avatar"className="round-img" style={{ width: "60px" }}/>
      <h2>{login}</h2>
      <a href={html_url} className="btn btn-dark btn-sm" target="_blank">More</a>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
