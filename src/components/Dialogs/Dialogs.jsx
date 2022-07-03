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
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Mikhail' id='1'/>
                <DialogItem name='Alyona' id='2'/>
                <DialogItem name='Dmitriy' id='3'/>
                <DialogItem name='Valera' id='4'/>
                <DialogItem name='Lena' id='5'/>
            </div>
            <div className={classes.messages}>
                <Message text='Hi'/>
                <Message text='Can I switch books?'/>
                <Message text='Ok, me to'/>

            </div>
        </div>


    )
}

export default Dialogs;