import React,  {useState} from 'react'
import {Component} from 'react'
import * as Tone from 'tone'

class IntervalQuiz extends Component {
    constructor() {
        super()
        this.state = {
            clicked : false,
            played : null,
            grade : null,
            lastQuestion : -1,
            score : 0,
            questionNumber : 0,
            chromatic:false,
            answerKey : {1:"C",9:"C#/Db",2:"D",10:"D#/Eb",3:"E",4:"F",11:"F#/Gb",5:"G",12:"G#/Ab",6:"A",13:"A#/Bb",7:"B",8:"C"}
        }
        this.handleChange = this.handleChange.bind(this)
        this.playNote = this.playNote.bind(this)

    }
    
    handleChange(event) {
        //console.log("evt    ",event.target.id,"    pld      ", this.state.answerKey[this.state.played])
        if (event.target.id == 14 ){
            this.setState(prevState =>{
                return {
                    clicked: !(prevState.clicked),
                    questionNumber : 0,
                    score : 0
                }
            
            })
        }
        else if (event.target.id == 18){
        this.setState(prevState =>{
            return {
                questionNumber : 0,
                score : 0
            }
        }
        ,()=>{
            if (this.state.clicked){this.playNote()}})
        }
        else if (event.target.id == 17){this.setState(prevState=>{return{chromatic:!prevState.chromatic}})}
        else{
            if (event.target.id == this.state.played){
                this.setState(prevState =>{
                    return {
                        grade: "Correct!",
                        score : (prevState.score + 1),
                        questionNumber : (prevState.questionNumber + 1)
                    }
                }, ()=> {
                    if (this.state.questionNumber < 10){
                        setTimeout(()=> this.playNote(),1000)
                    }
                    else{
                        this.setState({grade:"Quiz over. Score "+String(this.state.score) + "/10"})
                        setTimeout(()=> this.setState({clicked:false}),1500)}
                })
            }
            else{
                this.setState(prevState =>{
                    return {grade: "Wrong, answer is "+ (this.state.answerKey[this.state.played]),
                    questionNumber : prevState.questionNumber+1}
                }, ()=> {
                    if (this.state.questionNumber < 10){
                        setTimeout(()=> this.playNote(),1000)
                    }
                    else{
                        this.setState({grade:"Quiz over. Score "+String(this.state.score) + "/10"})
                        setTimeout(()=> this.setState({clicked:false}),1500)}
                })
            }
        }

    }
    
    playNote(){
        const synth = new Tone.Synth().toDestination();
        //play a middle 'C' for the duration of an 8th note
        const now = Tone.now()
        synth.triggerAttackRelease("C4", "4n",now);

        this.setState({
            grade:null
        })  
        this.setState({
            played:null
        }) 
        
        var maximum 
        this.state.chromatic ? maximum = 13 : maximum = 8
        var minimum = 1
        var randomNumber
        do {
         randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        }
        while(this.state.lastQuestion == randomNumber)
        this.setState({
            played: randomNumber
        }, ()=> {//put prints in callback as set state is async
            //console.log(randomNumber,"rdm")
            console.log(this.state.answerKey[this.state.played],"ply") 
            //console.log(this.state.grade,"grd") 
            this.setState({lastQuestion : this.state.randomNumber})
            if (this.state.played === 1){
                synth.triggerAttackRelease("C4", "4n",now + 1);
            }else if (this.state.played === 9){
                synth.triggerAttackRelease("C#4", "4n", now + 1);
            }else if (this.state.played === 2){
                synth.triggerAttackRelease("D4", "4n", now + 1);
            }else if (this.state.played === 10){
                synth.triggerAttackRelease("D#4", "4n", now + 1);
            }else if (this.state.played === 3){
                synth.triggerAttackRelease("E4", "4n", now + 1);
            }else if(this.state.played === 4){
                synth.triggerAttackRelease("F4", "4n", now + 1);
            }else if(this.state.played === 11){
            synth.triggerAttackRelease("F#4", "4n", now + 1);
            }else if(this.state.played === 5){
                synth.triggerAttackRelease("G4", "4n", now + 1);
            }else if(this.state.played === 12){
                synth.triggerAttackRelease("G#4", "4n", now + 1);
            }else if (this.state.played === 6){
                synth.triggerAttackRelease("A4", "4n", now + 1);
            }else if (this.state.played === 13){
                synth.triggerAttackRelease("A#4", "4n", now + 1);
            }else if(this.state.played === 7){
                synth.triggerAttackRelease("B4", "4n", now + 1);
            }else if(this.state.played === 8){
                synth.triggerAttackRelease("C5", "4n", now + 1);}
            
        }
    
    )} 
    render(){
        return(
            <div>
                <button id="14" onClick={this.handleChange}>{this.state.clicked ? "Quit" : "Interval Quiz"}</button>
                {
                    this.state.clicked  &&
                    <div>
                        <button id="18"onClick={this.handleChange}>Start</button>
                        <button id="17"onClick={this.handleChange}>Chromatic</button>
                        <div id="15" >Score: {this.state.score}/10</div>
                        <div id="16">Question: {this.state.questionNumber}</div>
                        <div id="9">{
                            this.state.grade != null && 
                                this.state.grade
                            }
                        </div>
                        {this.state.chromatic ?
                        <div>
                            <button id="1" onClick={this.handleChange}>C</button>
                            <button id="9" onClick={this.handleChange}>C#/Db</button>
                            <button id="2" onClick={this.handleChange}>D</button>
                            <button id="10" onClick={this.handleChange}>D#/Eb</button>
                            <button id="3" onClick={this.handleChange}>E</button>
                            <button id="4" onClick={this.handleChange}>F</button>
                            <button id="11" onClick={this.handleChange}>F#/Gb</button>
                            <button id="5" onClick={this.handleChange}>G</button>
                            <button id="12" onClick={this.handleChange}>G#/Ab</button>
                            <button id="6" onClick={this.handleChange}>A</button>
                            <button id="13" onClick={this.handleChange}>A#/Bb</button>
                            <button id="7" onClick={this.handleChange}>B</button>
                            <button id="8" onClick={this.handleChange}>C</button>
                        </div>
                        :
                        <div>
                        <button id="1" onClick={this.handleChange}>C</button>
                        <button id="2" onClick={this.handleChange}>D</button>
                        <button id="3" onClick={this.handleChange}>E</button>
                        <button id="4" onClick={this.handleChange}>F</button>
                        <button id="5" onClick={this.handleChange}>G</button>
                        <button id="6" onClick={this.handleChange}>A</button>
                        <button id="7" onClick={this.handleChange}>B</button>
                        <button id="8" onClick={this.handleChange}>C</button>
                        </div>}
                    </div>
                }
            </div>
        )
    }
}
export default IntervalQuiz