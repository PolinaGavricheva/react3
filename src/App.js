import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import React from 'react';
import './App.css';

const App = () => {
    return(
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/message"
                       render={ () => <DialogsContainer /> }
                />
                <Route path="/profile/:userId?"
                       render={ () => <ProfileContainer /> }
                />
                <Route path="/users"
                       render={ () => <UsersContainer /> }
                />
                <Route path="/settings" render={ () => <Settings /> } />
                <Route path="/news" render={ () => <News /> } />
            </div>
        </div>
    );
}

export default App;