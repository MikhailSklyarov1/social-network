import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {useRef} from "react";

function MyPosts(props) {

    let postComponents = props.postsData.map(p => <Post message={p.message} likes={p.likes}/>)

    const ref = useRef(null);

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = ref.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={ref}/>
                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>

            <div className={classes.posts}>
                {postComponents}
            </div>
        </div>
    );
}

export default MyPosts;