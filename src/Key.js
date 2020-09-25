import React from 'react'

function Key(props){
    function playSound(){
        //alert(props.dataNote + "3")
        props.audio.triggerAttackRelease(props.dataNote + "3", "8n")
    }

    return(
        <div dataNote={props.dataNote} className={props.type} onClick={playSound}></div>
    )
}

export default Key