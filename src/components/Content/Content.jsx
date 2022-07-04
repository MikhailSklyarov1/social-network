import classes from "./Context.module.css"
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Content(props) {
    return (
        <div>
            <ProfileInfo/>
            <div>
                <MyPosts postsData={props.postsData}/>
            </div>
        </div>
    );
}

export default Content;