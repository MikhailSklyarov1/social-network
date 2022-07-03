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

    let dialogsData = [{id:1, name:'Mikhail'}, {id:2, name:'Alyona'}, {id:3, name:'Dmitriy'},
                        {id:4, name:'Valera'}, {id:5, name:'Lena'}]

    let messagesData = [{id:1, message:'Hi!'}, {id:2, message:'Can I switch books?'}, {id:3, message:'Ok, me to'},
                        {id:4, message:'Hi!!'}, {id:5, message:'Hi!!!'}]

    let messageComponents = messagesData.map(m => <Message text={m.message}/>)
    let dialogsComponents = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

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