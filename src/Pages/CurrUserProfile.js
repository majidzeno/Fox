import React from 'react'
import PostList from '../Components/Posts/PostList/PostList';
import Header from '../Components/Header/Header'
import {useSelector} from 'react-redux';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function CurrUserProfile(props) {
    const userPosts = props.posts.filter(p => p.userId === parseInt(props.match.params.id));
    //const user = userPosts[0];
    const numOfPosts = useSelector((state) => state.numOfPosts);
    const { currentUser } = useAuth()
    console.log(userPosts)

    return(
        <>
        <Header/>
        <div className="container py-3 d-flex flex-column justify-content-center align-items-center" style={{border: '2px solid red'}}>
            <img src={currentUser.photoURL} alt="Profile Pic" style={{borderRadius: '50%'}} />
            <h1>{currentUser.displayName}</h1>
            <h6>{currentUser.email.split('@')[0]}</h6>
            <Link to="/update-profile" className='btn btn-primary mt-3'>Update Profile</Link>
        </div>
        <div className="container" >
            <PostList posts={userPosts} numOfPosts={numOfPosts}  />
        </div>
        </>
    )

}
