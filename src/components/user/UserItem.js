import React, { Component } from 'react'

class UserItem extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img src={avatar_url} alt="avatar"className="round-img" style={{ width: "60px" }}/>
        <h2>{login}</h2>
        <a href={html_url} className="btn btn-dark btn-sm" target="_blank">More</a>
      </div>
    )
  }
}

export default UserItem
