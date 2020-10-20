import React,  {useState} from 'react'
import {Component} from 'react'
import * as Tone from 'tone'

class IntervalQuiz extends Component {
    constructor() {
        super()
        this.state = {
            clicked : false,
            played : null,
            grade : null
        }
        this.handleChange = this.handleChange.bind(this)
        this.playNote = this.playNote.bind(this)

    }
    
    handleChange(event) {
        console.log("evt    ",event.target.id,"    pld      ", this.state.played)
        if (event.target.id == 8 ||event.target.id == 10){
            this.setState(prevState =>{
                return {
                    clicked: !(prevState.clicked)
                }
            })
            //console.log(this.state.clicked)
        }
        else{
            if (event.target.id == this.state.played){
                this.setState({
                    grade: "Correct!"
                }, ()=> {//put prints in callback as set state is async
                    console.log(this.state,"grd") 
                    }
                )
            }
            else{
                this.setState({
                    grade: "Wrong, answer is "+ String(this.state.played)
                }, ()=> {//put prints in callback as set state is async

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
        var maximum = 7
        var minimum = 1
        var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        this.setState({
            played: randomNumber
        }, ()=> {//put prints in callback as set state is async
            console.log(randomNumber,"rdm")
            console.log(this.state.played,"ply") 
            console.log(this.state.grade,"grd") 
            if (this.state.played == 1){
                synth.triggerAttackRelease("C4", "4n",now + 1);
            }
            else if (this.state.played == 2){
                synth.triggerAttackRelease("D4", "4n", now + 1);
            }else if (this.state.played == 3){
                synth.triggerAttackRelease("E4", "4n", now + 1);
            }else if(this.state.played == 4){
                synth.triggerAttackRelease("F4", "4n", now + 1);
            }else if(this.state.played == 5){
                synth.triggerAttackRelease("G4", "4n", now + 1);
            }else if (this.state.played == 6){
                synth.triggerAttackRelease("A4", "4n", now + 1);
            }else if(this.state.played == 7){
                synth.triggerAttackRelease("B4", "4n", now + 1);
            }
        }
    
    )} 
    render(){
        return(
            <div>
                <button id="8" onClick={this.handleChange}>Take Interval Quiz</button>
                {
                    this.state.clicked  &&
                    <div>
                        <button id="10" onClick={this.handleChange}>Quit</button>
                        <button id="9" onClick={this.playNote}>Play Note</button>
                        <div id="9">{
                            this.state.grade != null && 
                                this.state.grade
                            }
                        </div>

                        <div>
                            <button id="1" onClick={this.handleChange}>1</button>
                            <button id="2" onClick={this.handleChange}>2</button>
                            <button id="3" onClick={this.handleChange}>3</button>
                            <button id="4" onClick={this.handleChange}>4</button>
                            <button id="5" onClick={this.handleChange}>5</button>
                            <button id="6" onClick={this.handleChange}>6</button>
                            <button id="7" onClick={this.handleChange}>7</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default IntervalQuiz