import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?'/>
                <Post message='Myfirst post'/>
            </div>
        </div>
    )
};

export default MyPosts;
