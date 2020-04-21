import React from 'react';
import './css/style.css'
import {MusicProvider} from './Context'
import MusicList from './MusicList';
import Filter from './Filter';
import Header from './Header';

function App() {
  return (
    <MusicProvider>
      <Header/>
      <Filter/>
      <MusicList/>
    </MusicProvider>
  );
}

export default App;
