const state = {
    profilePage: {
        posts: [
            {id: 1, msg: 'Hi, how are you?', likesCount: 12},
            {id: 2, msg: 'My first post', likesCount: 8}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Sergey'},
            {id: 4, name: 'Sasha'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Buy'}
        ]
    },
};

export default state;
