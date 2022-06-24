import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (
            <div>
                My posts

                <div>
                    <textarea>

                    </textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>

                <div>
                    New post
                </div>
                <div>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
    );
}

export default MyPosts;