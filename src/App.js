// import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-100 text-gray-700">
                <Header/>
                <main className="max-w-5xl mx-auto mt-8 flex">
                    <Navbar/>
                    <div className="w-3/4">
                        <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
