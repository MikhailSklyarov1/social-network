import classes from "./Context.module.css"
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Content() {
    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Content;