import React, {useState, useEffect} from 'react'
import FretBoard from './FretBoard';
import IntervalQuiz from './IntervalQuiz';
import Piano from './Piano'
import TriadQuiz from './TriadQuiz'
function App() {
  
  return (
    <div>
      <Piano />
      <IntervalQuiz />
      <TriadQuiz />
      <FretBoard/>
    </div>
  )
}

export default App;
