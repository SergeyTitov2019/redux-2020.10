import React from 'react';
import './App.css';
import DenseAppBar from './components/app-header'
import ReduxSandbox from './components/redux-sandbox'

function App() {
  return (
    <div className="App">
        <DenseAppBar />
        <div>

        </div>
      <div className='list-wrapper'>
        <ReduxSandbox />
      </div>

    </div>
  );
}

export default App;
