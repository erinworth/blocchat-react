import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAuAoUXoZfyCOCQOy0-IgfdTFGuP845dQk",
  authDomain: "react-bloc-chat.firebaseapp.com",
  databaseURL: "https://react-bloc-chat.firebaseio.com",
  projectId: "react-bloc-chat",
  storageBucket: "react-bloc-chat.appspot.com",
  messagingSenderId: "635696896265"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <RoomList firebase={firebase} />
        </main>
      </div>
    );
  }
}

export default App;
