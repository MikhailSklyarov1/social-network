import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {
  return (

      <BrowserRouter>
          <div className='app-wrapper'>

              <Header />
              <Nav />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path="/dialogs/*" element=
                          {<Dialogs dialogsData={props.state.messagePage.dialogs} messagesData={props.state.messagePage.messages}/>}/>
                      <Route path="/profile" element={<Content postsData={props.state.profilePage.posts}/>}/>
                      <Route path="/news" element={<News/>}/>
                      <Route path="/music" element={<Music/>}/>
                      <Route path="/settings" element={<Settings/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}



export default App;

