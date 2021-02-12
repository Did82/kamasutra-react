import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.background} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt=""/>
            </div>
            <div>
                <img className={s.photo} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
            </div>
            <div>
                Main content
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;
