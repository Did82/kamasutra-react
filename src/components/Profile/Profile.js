import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
        <div className="bg-white rounded shadow">
            <div>
                <img className="w-full h-24 rounded-t mb-4"
                     src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                     alt=""/>
            </div>
            <Profileinfo/>
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;
