import { Link, useHistory } from "react-router-dom";
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Button, Alert } from 'react-bootstrap'
import "./nav.css";

const NavSide = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()

  const history = useHistory();

  async function handleLogout(){
      setError('') //clear Error

      try{
          await logout()
          history.push('/login')
      } catch {
          setError('Failed to log out')
      }
  }
  
  return (
    <div className="card side">
      <div className="container side">
        <div className="row">
          <div className="col-2">
            <img className="nav-img" alt="icon" src={currentUser.photoURL} style={{width: 50}}/>
          </div>

          <div className="col-10">
            <Link to={`/user/${currentUser.email.split('@')[0]}`}><h5 className="card-title side">{currentUser.displayName}</h5></Link>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h6 className="card-text side">@{currentUser.email.split('@')[0]}</h6>
          </div>
        </div>
      </div>

      <ul className="list-group list-group-flush">
        <Link to="/" className="list-group-item active" aria-current="true">
          <i className="far fa-home"></i> Feed
        </Link>

        <Link to="/" className="list-group-item">
          <i className="far fa-user-friends"></i> Friends
        </Link>

        <Link to="/" className="list-group-item">
          <i className="fal fa-calendar"></i> Events
        </Link>

        <Link to="/" className="list-group-item">
          <i className="far fa-video"></i> Watch Videos
        </Link>

        <Link to="/" className="list-group-item">
          <i className="fal fa-images"></i> Photos
        </Link>

        <Link to="/" className="list-group-item">
          <i className="fal fa-file-alt"></i> Files
        </Link>

        <Link to="/" className="list-group-item">
          <i className="fal fa-file-alt"></i> Market Place
        </Link>

        <div className="list-group-item">
          <Button variant="link" onClick={handleLogout}> Log out</Button>
          {error && <Alert variant='danger'>{error}</Alert>}
        </div>
      </ul>
    </div>
  );
};

export default NavSide;
