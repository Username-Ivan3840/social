import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
function App({ dialogData, postData }) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <NavBar />
        <div className="container">
          <Route path="/" render={() => <Profile dataPost={postData} />} exact />
          <Route path="/profile" render={() => <Profile dataPost={postData} />} exact />
          <Route path="/message" render={() => <Dialogs data={dialogData} gah={"отправить"} />} exact />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;