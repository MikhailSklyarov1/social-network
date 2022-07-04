import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts(props) {
    
    let postComponents = props.postsData.map(p => <Post message={p.message} likes={p.likes}/>)

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
                {postComponents}
            </div>
        </div>
    );
}

export default MyPosts;