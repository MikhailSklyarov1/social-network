import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea>
                    </textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>

            <div className={classes.posts}>
                <Post message='Hello!' likes='4'/>
                <Post message='Second post' likes='7'/>
                <Post message='New post' likes='5'/>
            </div>
        </div>
    );
}

export default MyPosts;