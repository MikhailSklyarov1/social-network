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
                    <Post message='Hello!' likes='4'/>
                    <Post message='Second post' likes='7'/>
                    <Post message='New post' likes='5'/>
                </div>
            </div>
    );
}

export default MyPosts;