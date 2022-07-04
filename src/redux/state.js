
let state = {
    profilePage: {
        posts: [{message: 'Hello!', likes: '4'},
            {message: 'Second post', likes: '7'},
            {message: 'New post!', likes: '5'}]
    },

    messagePage: {
        messages: [{id: 1, message: 'Hi!'},
            {id: 2, message: 'Can I switch books?'},
            {id: 3, message: 'Ok, me to'},
            {id: 4, message: 'Hi!!'},
            {id: 5, message: 'Hi!!!'}],
        dialogs: [{id: 1, name: 'Mikhail'},
            {id: 2, name: 'Alyona'},
            {id: 3, name: 'Dmitriy'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Lena'}],
    }
}

export default state;