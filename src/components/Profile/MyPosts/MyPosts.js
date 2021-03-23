import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    const postsElements = props.posts.map(post => <Post message={post.msg} likesCount={post.likesCount}/>);

    const newPostElement = React.createRef();

    const addPost = () => {
        const text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className="">
            My posts
            <div className="mb-4">
                <div>
                    <textarea className="bg-gray-200" ref={newPostElement}></textarea>
                </div>
                <div>
                    <button className="bg-purple-600 text-white px-2 rounded hover:bg-purple-800" onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className="">
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
