import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


function DialogItem (props) {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
    )
}

function Message (props) {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}


function Dialogs(props) {



    let messageComponents = props.messagesData.map(m => <Message text={m.message}/>)
    let dialogsComponents = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsComponents}
            </div>
            <div className={classes.messages}>
                {messageComponents}
            </div>
        </div>


    )
}

export default Dialogs;