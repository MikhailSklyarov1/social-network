import classes from "./Context.module.css"
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

function Content(props) {
    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPosts postsData={props.postsData} addPost={props.addPost}/>
            </div>
        </div>
    );
}

export default Content;