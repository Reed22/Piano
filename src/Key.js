import React, {useState, useEffect} from 'react'

function Key(props){
    const keyColor = props.type === "key white" ? "white" : "black"
    const playedColor = keyColor === "black" ? "#333" : "#CCC"

    const [played, setPlayed] = useState(false)
    const [color, setColor] = useState(keyColor)
  
    function changeColor(){
        if(played){
            setColor(playedColor)
        }
        else{
            setColor(keyColor)
        }
    }

    
    function changePlay(){
        setPlayed(prevPlay => !prevPlay)
        changeColor()
    }

    useEffect(changeColor, [played])

    function playSound(){
        changePlay()
        props.audio.triggerAttackRelease(props.dataNote + props.octave, "8n")
        setTimeout(changePlay, 250) //Probably not the best way to do this
    }

    return(
        <div style={{backgroundColor: color}}dataNote={props.dataNote} className={props.type} onClick={playSound}></div>
    )
}

export default Key