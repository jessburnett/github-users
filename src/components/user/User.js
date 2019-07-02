import React, {
  Fragment, useEffect, useContext
} from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';


const User = ({match}) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user } = githubContext;

  useEffect(()=>{
    getUser(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    hireable,
    public_repos,
    company
  } = user;

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
          <img src={avatar_url} alt="avatar" className="round-img" style={{width: '150px'}}/>
          <h2>{name}</h2>  
          <p>{location}</p>
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
            {company && (<Fragment>
              <div className='card'>
                <span className='badge badge-success'>Repos:{' '}{public_repos}</span>
                <span className='badge badge-light'>Followers:{' '}{followers}</span>
                <span className='badge badge-dark'>Following:{' '}{following}</span>
              </div>
            </Fragment>)}
        </div>
      </div>
    </Fragment>
  ) 
}

export default User;