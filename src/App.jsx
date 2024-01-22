import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <NavBar />
        <div className="container">
          <Route path="/" component={Profile} exact />
          <Route path="/profile" component={Profile} exact />
          < Route path="/message" component={Dialogs} exact />
        </div>

      </BrowserRouter>

    </div>


  );
}

export default App;
