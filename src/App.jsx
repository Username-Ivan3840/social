import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import { dialogChange } from './Data/state';
function App({ dialogData, postData, FriendData, addPost, addText, dialogChange, textNow }) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <NavBar FriendData={FriendData} />
        <div className="container">
          <Route path="/" render={() => <Profile dataPost={postData} />} exact />
          <Route path="/profile" render={() => <Profile dataPost={postData} addPost={addPost} />} exact />
          <Route path="/message" render={() => <Dialogs data={dialogData} addText={addText} dialogChange={dialogChange} textNow={textNow} />} exact />

        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;