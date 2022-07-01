import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";



function App() {
  return (
    <div className='app-wrapper'>

        <Header/>

        <Nav/>

        {/*<Content/>*/}
        <Dialogs/>

    </div>
  );
}



export default App;

