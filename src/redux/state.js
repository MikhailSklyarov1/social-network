
let store = {
    _state : {
        profilePage: {
            posts: [{id:1, message: 'Hello!', likes: '4'},
                {id:2, message: 'Second post', likes: '7'},
                {id:3, message: 'New post!', likes: '5'}],
            newPostText: 'textTextText'
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
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    addPost() {
        let newPost = {
            id: 4,
            message: store._state.profilePage.newPostText,
            likes: '0'
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(store._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(store._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;