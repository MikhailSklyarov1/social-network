import classes from "./Context.module.css"
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";

function Content() {
    return (
        <div>
            <div>
                <div className={classes.content}>
                    <img
                        src='https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg'/>
                </div>

                <div>
                    Ava + description
                </div>

                <div>
                    <MyPosts/>
                </div>
            </div>
        </div>
    );
}

export default Content;