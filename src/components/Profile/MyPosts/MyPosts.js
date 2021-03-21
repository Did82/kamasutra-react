import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map(post => <Post message={post.msg} likesCount={post.likesCount}/>)

    return (
        <div className="">
            My posts
            <div className="mb-4">
                <div>
                    <textarea className="bg-gray-200"></textarea>
                </div>
                <div>
                    <button className="bg-purple-600 text-white px-2 rounded hover:bg-purple-800">Add post</button>
                </div>
            </div>
            <div className="">
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
