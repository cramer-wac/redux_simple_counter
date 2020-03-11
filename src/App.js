import React from 'react';
import './App.css';

import Counter from './components/counter/Counter'
import store from './store/index'

function App() {
  return (
    <div className="App">
      <Counter store={store}/>
    </div>
  );
}

export default App;
