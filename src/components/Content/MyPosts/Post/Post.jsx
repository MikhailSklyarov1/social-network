import classes from "./Post.module.css"

function Post(props) {
    return (

        <div className={classes.item}>
            <img src='https://cdn-icons.flaticon.com/png/128/5013/premium/5013735.png?token=exp=1656840141~hmac=99457889f2d722851122c876a2cd51ef'/>
            {props.message}
            <div>
                {props.likes} likes
            </div>
        </div>

    );
}

export default Post;