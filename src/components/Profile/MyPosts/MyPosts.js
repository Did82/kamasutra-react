import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    const postsElements = props.posts.map(post => <Post message={post.msg} likesCount={post.likesCount}/>);

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className="">
            My posts
            <div className="mb-4">
                <div>
                    <textarea className="bg-gray-200" onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button className="bg-purple-600 text-white px-2 rounded hover:bg-purple-800"
                            onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className="">
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
