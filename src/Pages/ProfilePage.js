import PostList from '../Components/Posts/PostList/PostList';
import Header from '../Components/Header/Header'
import {useSelector} from 'react-redux';

const ProfilePage = (props) => {
    const userPosts = props.posts.filter(p => p.userId === parseInt(props.match.params.id));
    const user = userPosts[0];
    const numOfPosts = useSelector((state) => state.numOfPosts);

    return(
        <>
        <Header/>
        <div className="container py-3 d-flex flex-column justify-content-center align-items-center" style={{border: '2px solid red'}}>
            <img src={user.thumbnailUrl} alt="Profile Pic" style={{borderRadius: '50%'}} />
            <h1>{user.name}</h1>
            <h6>{user.username}</h6>
        </div>
        <div className="container" >
            <PostList posts={userPosts} numOfPosts={numOfPosts} />
        </div>
        </>
    )
}

export default ProfilePage;
