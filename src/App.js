import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (

      <BrowserRouter>
          <div className='app-wrapper'>

              <Header />
              <Nav />
              <div class='app-wrapper-content'>
                  <Routes>
                      <Route path="/messages" element= {<Dialogs/>}/>
                      <Route path="/profile" element={<Content/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}



export default App;

