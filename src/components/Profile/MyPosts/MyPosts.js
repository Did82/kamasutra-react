import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    const posts = [
        {id: 1, msg: 'Hi, how are you?', likesCount: 12},
        {id: 2, msg: 'My first post', likesCount: 8}
    ];

    const postsElements = posts.map(post => <Post message={post.msg} likesCount={post.likesCount}/>)

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
