import {rerenderEntireTree} from "../render";



export let state = {
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
}


export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likes: '0'
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;