import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <img src="https://yt3.ggpht.com/a/AATXAJxZKF-MCdv0gFG61Oi4gn25CEWbJOKzYkb0SWVJZg=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
            </div>
            <div className={s.content}>
                <div className={s.item}>{props.message}</div>
                <span className={s.like}>Likes: {props.likesCount}</span>
            </div>
        </div>
    )
};

export default Post;
