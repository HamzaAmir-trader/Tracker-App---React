import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
  <SpeechProvider appId="b0f1d8c6-6a81-4fa1-9acc-61a0f1ac4c29" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
