import classes from "./Context.module.css"

function Content() {
    return (
        <div className={classes.content}>
            <img src='https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg'/>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={classes.item}>post 1</div>
                    <div className={classes.item}>post 2</div>
                    <div className={classes.item}>post 3</div>
                </div>
            </div>
        </div>
    );
}

export default Content;