import PostList from '../Components/Posts/PostList/PostList';
import {useSelector} from 'react-redux';

const ProfilePage = (props) => {
    console.log("ProfilePage props: ", props.posts);
    const userPosts = props.posts.filter(p => p.userId === parseInt(props.match.params.id));
    console.log("User Posts: ", userPosts);
    const user = userPosts[0];
    console.log("User: ", user);
    const numOfPosts = useSelector((state) => state.numOfPosts);

    return(
        <>
        <div className="container py-3 d-flex flex-column justify-content-center align-items-center" style={{border: '2px solid red'}}>
            <img src={user.thumbnailUrl} alt="Profile Pic" style={{borderRadius: '50%'}} />
            <h1>{user.name}</h1>
            <h6>{user.username}</h6>
        </div>
        <div className="container" style={{border: '2px solid red'}}>
            <PostList posts={userPosts} numOfPosts={numOfPosts} />
        </div>
        </>
    )
}

export default ProfilePage;