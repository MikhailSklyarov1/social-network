import classes from "./Post.module.css"

function Post(props) {
    return (

        <div className={classes.item}>
            <img
                src='https://cdn-icons.flaticon.com/png/512/4140/premium/4140037.png?token=exp=1656092200~hmac=8ecf4fd44960c015728e09114ea4caf7'/>
            {props.message}
            <div>
                {props.likes} likes
            </div>
        </div>

    );
}

export default Post;