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
            questionNumber : 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.playNote = this.playNote.bind(this)

    }
    
    handleChange(event) {
        console.log("evt    ",event.target.id,"    pld      ", this.state.played)
        if (event.target.id == 14 ){
            this.setState(prevState =>{
                return {
                    clicked: !(prevState.clicked),
                    questionNumber : 0,
                    score : 0
                }
            },()=>{
                if (this.state.clicked == true){
                    for (var i=0; i < 9; i++){
                        this.playNote()
                    }
                }
            })
            //console.log(this.state.clicked)
        }
        else{
            if (event.target.id == this.state.played){
                this.setState(prevState =>{
                    return {
                        grade: "Correct!",
                        score : (prevState.score + 1),
                        questionNumber : (prevState.questionNumber + 1)
                    }
                }, ()=> {
                    console.log(this.state,"grd") 
                    }
                )
            }
            else{
                this.setState({
                    grade: "Wrong, answer is "+ String(this.state.played)
                }, ()=> {

                    console.log(this.state,"grd") 
        
                    }
                )
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
        var maximum = 13
        var minimum = 2
        var randomNumber
        do {
         randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        }
        while(this.state.lastQuestion == randomNumber)
        this.setState({
            played: randomNumber
        }, ()=> {//put prints in callback as set state is async
            console.log(randomNumber,"rdm")
            console.log(this.state.played,"ply") 
            console.log(this.state.grade,"grd") 
            this.setState({lastQuestion : this.state.randomNumber})
            if (this.state.played === 1){
                synth.triggerAttackRelease("C4", "4n",now + 1);
            }else if (this.state.played === 2){
                synth.triggerAttackRelease("C#4", "4n", now + 1);
            }else if (this.state.played === 3){
                synth.triggerAttackRelease("D4", "4n", now + 1);
            }else if (this.state.played === 4){
                synth.triggerAttackRelease("D#4", "4n", now + 1);
            }else if (this.state.played === 5){
                synth.triggerAttackRelease("E4", "4n", now + 1);
            }else if(this.state.played === 6){
                synth.triggerAttackRelease("F4", "4n", now + 1);
            }else if(this.state.played === 7){
            synth.triggerAttackRelease("F#4", "4n", now + 1);
            }else if(this.state.played === 8){
                synth.triggerAttackRelease("G4", "4n", now + 1);
            }else if(this.state.played === 9){
                synth.triggerAttackRelease("G#4", "4n", now + 1);
            }else if (this.state.played === 10){
                synth.triggerAttackRelease("A4", "4n", now + 1);
            }else if (this.state.played === 11){
                synth.triggerAttackRelease("A#4", "4n", now + 1);
            }else if(this.state.played === 12){
                synth.triggerAttackRelease("B4", "4n", now + 1);
            }else if(this.state.played === 13){
                synth.triggerAttackRelease("C5", "4n", now + 1);}
            
        }
    
    )} 
    render(){
        return(
            <div>
                <button id="14" onClick={this.handleChange}>Interval Quiz</button>
                {
                    this.state.clicked  &&
                    <div>
                        <div id="15" >Score: {this.state.score}</div>
                        <div id="16">Question: {this.state.questionNumber}</div>
                        <div id="9">{
                            this.state.grade != null && 
                                this.state.grade
                            }
                        </div>

                        <div>
                            <button id="1" onClick={this.handleChange}>C</button>
                            <button id="2" onClick={this.handleChange}>C#/Db</button>
                            <button id="3" onClick={this.handleChange}>D</button>
                            <button id="4" onClick={this.handleChange}>D#/Eb</button>
                            <button id="5" onClick={this.handleChange}>E</button>
                            <button id="6" onClick={this.handleChange}>F</button>
                            <button id="7" onClick={this.handleChange}>F#/Gb</button>
                            <button id="8" onClick={this.handleChange}>G</button>
                            <button id="9" onClick={this.handleChange}>G#/Ab</button>
                            <button id="10" onClick={this.handleChange}>A</button>
                            <button id="11" onClick={this.handleChange}>A#/Bb</button>
                            <button id="12" onClick={this.handleChange}>B</button>
                            <button id="13" onClick={this.handleChange}>C</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default IntervalQuiz