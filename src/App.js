import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import React from 'react';
import './App.css';
import store from "./Redux/state";

const App = (props) => {

    return(
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/message"
                       render={ () => <Dialogs
                           store={props.store} /> }
                />
                <Route path="/profile"
                       render={ () => <Profile
                            dispatch={props.dispatch}
                            profilePage={props.state.profilePage} /> }
                />
                <Route path="/settings" render={ () => <Settings /> } />
                <Route path="/news" render={ () => <News /> } />
            </div>
        </div>
    );
}

export default App;