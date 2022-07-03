import classes from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div>
            <div className={classes.content}>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg'/>
            </div>

            <div className={classes.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;