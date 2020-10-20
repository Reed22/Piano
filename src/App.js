import React, {useState, useEffect} from 'react'
import IntervalQuiz from './IntervalQuiz';
import Piano from './Piano'
import TriadQuiz from './TriadQuiz'
function App() {
  
  return (
    <div>
      <Piano />
      <IntervalQuiz />
      <TriadQuiz />
    </div>
  )
}

export default App;
