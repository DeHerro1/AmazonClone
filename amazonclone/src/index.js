import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, {initialState} from './reducer';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCTxWPXcDDorcIMKy9fL3pUid4WZgdahz0",
//   authDomain: "clone-50cf3.firebaseapp.com",
//   projectId: "clone-50cf3",
//   storageBucket: "clone-50cf3.appspot.com",
//   messagingSenderId: "1039031868707",
//   appId: "1:1039031868707:web:53223b46310ecdf09c4096",
//   measurementId: "G-X2ZZXWKSGL"
// };

ReactDOM.render(
   <StateProvider initialState={initialState} reducer={reducer}>
     <App />
   </StateProvider>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
