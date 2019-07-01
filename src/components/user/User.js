import React, {
  Component, Fragment
} from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      hireable,
      public_repos,
      company
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner/>
    
    return ( 
      <Fragment>
        <Link to='/' className="btn btn-light">Back To Search</Link>
        Hireable: {' '}
        { hireable ? (<i className='fas fa-check text-success'/>) : 
          (<i className='fas fa-times-circle text-danger'/>)
        }
        <div className="card grid-2"> 
          <div className='all-center'>
            <img src={avatar_url} alt="avatar image" className="round-img" style={{width: '150px'}}/>
            <h2>{name}</h2>  
            <p>{blog && (<Fragment>
                <a src={blog} target="_blank" className="text-dark">{blog}</a>
              </Fragment>)}
            </p>
            <div>
              {company && (<Fragment>
                <h5>{company}</h5>
              </Fragment>)}
            </div>
          </div>
          
          <div className='all-center'>
            {bio && (<Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>)}
            <a href={html_url} className='btn btn-dark my-1'>Github Profile</a>       
            <div className='card'>
              {company && (<Fragment>
                <span className='badge badge-success'>Repos:{' '}{public_repos}</span>
                <span className='badge badge-light'>Followers:{' '}{followers}</span>
                <span className='badge badge-dark'>Following:{' '}{following}</span>
              </Fragment>)}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default User;