const Post = (props) => {
    return (
        <div className="flex mb-4">
            <div className="">
                <img className="h-12 rounded-full mr-4" src="https://yt3.ggpht.com/a/AATXAJxZKF-MCdv0gFG61Oi4gn25CEWbJOKzYkb0SWVJZg=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
            </div>
            <div className="">
                <div className="">{props.message}</div>
                <span className="">Likes: {props.likesCount}</span>
            </div>
        </div>
    )
};

export default Post;
