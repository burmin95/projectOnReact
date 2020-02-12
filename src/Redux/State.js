let store = {
    _renderEntireTree() { },

    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi', likeCount: 5 },
                { id: 2, message: 'Privet', likeCount: 10 }
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogsData: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Boris' },
                { id: 4, name: 'Evgen' },
                { id: 5, name: 'Radik' },
                { id: 6, name: 'Pidor' }
            ],

            messageData: [
                { id: 1, message: 'HI' },
                { id: 2, message: 'Gitler' },
            ],
            newMessageText: ''
        }
    },
    getState() {
        return store._state
    },

    updateMessageText(text) {
        store._state.dialogPage.newMessageText = text;
        store._renderEntireTree(store._state);
    },

    addMessage() {
        let text = {
            id: 3,
            message: store._state.dialogPage.newMessageText
        }
        store._state.dialogPage.messageData.push(text)
        store._state.dialogPage.newMessageText = ''
        store._renderEntireTree(store._state);
    },

    updatePostText(text) {
        store._state.profilePage.newPostText = text;
        store._renderEntireTree(store._state);
    },

    addPost() {
        let text = {
            id: 3,
            message: store._state.profilePage.newPostText,
            likeCount: 0
        }
        store._state.profilePage.postData.push(text);
        store._state.profilePage.newPostText = '';
        store._renderEntireTree(store._state);
    },

    subscribe(observer) {
        store._renderEntireTree = observer;
    }
}

export default store;