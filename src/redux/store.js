import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello, my friend', likesCount: 11},
                {id: 2, message: 'I want to travel', likesCount: 12},
                {id: 3, message: 'BlaBla', likesCount: 13},
                {id: 4, message: 'I like Hawaii', likesCount: 14}
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Polina'},
                {id: 3, name: 'Dasha'},
                {id: 4, name: 'Gleb'},
                {id: 5, name: 'Vika'},
                {id: 6, name: 'Olga'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Random message'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;