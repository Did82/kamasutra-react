import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

    return (
        <div>
            <div>
                <img className={s.background} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt=""/>
            </div>
            <Profileinfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;
