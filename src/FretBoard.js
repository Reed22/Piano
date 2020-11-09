import React,  {useState} from 'react'
import {Component} from 'react'
import * as Tone from 'tone'
import FretboardNote from './FretboardNote'
//import styles from './fret.module.css'

class FretBoard extends Component {
    constructor() {
        super()
        this.state = {
            clicked : false,
            grade : null,
            startQuiz:false,
            noteSelectionCount:0,
            currentNote:"",
            noteIds:[],
            noteColor: "fretboard-box",
            noteColorFound : "fretboard-box-green"

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.createQuiz = this.createQuiz.bind(this)

    }
    createQuiz(){
        var noteSelector = ["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G",,"G#/Ab","A","A#/Bb","B"]
        var maximum = 11
        var minimum = 0
        var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        console.log( noteSelector[randomNumber])
        this.setState({currentNote: noteSelector[randomNumber]},()=>{console.log(this.state.currentNote)})
    }
    handleClick(event){
        console.log(event.target.dataset.value)//.dataValue)
        if(event.target.dataset.value == this.state.currentNote && !this.state.noteIds.includes(event.target.id) ){
            this.state.noteIds.push(event.target.id)
            this.setState(prevState=>{
                return {
                    noteSelectionCount : (prevState.noteSelectionCount + 1)}
            })
        }
    }
    handleChange(event) {
        if (event.target.id == 1){
            this.setState(prevState =>{
                return {
                    clicked: !(prevState.clicked)
                }
            })
            //console.log(this.state.clicked)
        }
        else if (event.target.id == 2){
            this.setState(prevState =>{
                return {
                    startQuiz: !(prevState.startQuiz), 
                    currentNote:"",
                    noteSelectionCount:0,
                    noteIds:[]
                }
            },()=>{this.createQuiz()})
            //console.log(this.state.clicked)
        }
    }
     
    render(){

        return(
            <div>

                <button id="2" onClick={this.handleChange}>Take Fretboard Quiz</button>
                {this.state.startQuiz  &&
                <div>
                    <h3 id="3">Click All 6 {this.state.currentNote} Notes on the Fretboard</h3>
                    <h3>Notes Found = {this.state.noteSelectionCount}</h3>
                    <div className="fretboard-wrapper">
                        <div data-value = "E" id="1-0" class="fretboard-box fretboard-open">E</div>
                        <FretboardNote note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <div class={this.state.noteColor} id="1-2" onClick={this.handleClick} data-value = "F#/Gb"></div>
                        <div class={this.state.noteColor} id="1-3"onClick={this.handleClick} data-value = "G"></div>
                        <div class={this.state.noteColor} id="1-4"onClick={this.handleClick} data-value = "G#/Ab"></div>
                        <div class={this.state.noteColor} id="1-5"onClick={this.handleClick} data-value = "A"></div>
                        <div class={this.state.noteColor} id="1-6"onClick={this.handleClick} data-value = "A#/Bb"></div>
                        <div class={this.state.noteColor} id="1-7"onClick={this.handleClick} data-value = "B"></div>
                        <div class={this.state.noteColor} id="1-8"onClick={this.handleClick} data-value = "C"></div>
                        <div class={this.state.noteColor} id="1-9"onClick={this.handleClick} data-value = "C#/Db"></div>
                        <div class={this.state.noteColor} id="1-10"onClick={this.handleClick} data-value = "D"></div>
                        <div class={this.state.noteColor} id="1-11"onClick={this.handleClick} data-value = "D#/Eb"></div>
                        <div class={this.state.noteColor} id="1-12"onClick={this.handleClick} data-value = "E"></div>



                        <div class="fretboard-box fretboard-open"id="2-0" onClick={this.handleClick} data-value = "A">A</div>
                        <div class={this.state.noteColor} id="2-1"onClick={this.handleClick} data-value = "A#/Bb"></div>
                        <div class={this.state.noteColor}id="2-2"onClick={this.handleClick} data-value = "B"></div>
                        <div class={this.state.noteColor}id="2-3"onClick={this.handleClick} data-value = "C"></div>
                        <div class={this.state.noteColor}id="2-4"onClick={this.handleClick} data-value = "C#/Db"></div>
                        <div class={this.state.noteColor}id="2-5"onClick={this.handleClick} data-value = "D"></div>
                        <div class={this.state.noteColor}id="2-6"onClick={this.handleClick} data-value = "D#/Eb"></div>
                        <div class={this.state.noteColor}id="2-7"onClick={this.handleClick} data-value = "E"></div>
                        <div class={this.state.noteColor}id="2-8"onClick={this.handleClick} data-value = "F"></div>
                        <div class={this.state.noteColor}id="2-9"onClick={this.handleClick} data-value = "F#/Gb"></div>
                        <div class={this.state.noteColor}id="2-10"onClick={this.handleClick} data-value = "G"></div>
                        <div class={this.state.noteColor}id="2-11"onClick={this.handleClick} data-value = "G#/Ab"></div>
                        <div class={this.state.noteColor}id="2-12"onClick={this.handleClick} data-value = "A"></div>



                        <div class="fretboard-box fretboard-open"id="3-0"onClick={this.handleClick} data-value = "D">D</div>
                        <div class={this.state.noteColor}id="3-1"onClick={this.handleClick} data-value = "D#/Eb"></div>
                        <div class={this.state.noteColor}id="3-2"onClick={this.handleClick} data-value = "E"></div>
                        <div class={this.state.noteColor}id="3-3"onClick={this.handleClick} data-value = "F"></div>
                        <div class={this.state.noteColor}id="3-4"onClick={this.handleClick} data-value = "F#/Gb"></div>
                        <div class={this.state.noteColor}id="3-5"onClick={this.handleClick} data-value = "G"></div>
                        <div class={this.state.noteColor}id="3-6"onClick={this.handleClick} data-value = "G#/Ab"></div>
                        <div class={this.state.noteColor}id="3-7"onClick={this.handleClick} data-value = "A"></div>
                        <div class={this.state.noteColor}id="3-8"onClick={this.handleClick} data-value = "A#/Bb"></div>
                        <div class={this.state.noteColor}id="3-9"onClick={this.handleClick} data-value = "B"></div>
                        <div class={this.state.noteColor}id="3-10"onClick={this.handleClick} data-value = "C"></div>
                        <div class={this.state.noteColor}id="3-11"onClick={this.handleClick} data-value = "C#/Db"></div>
                        <div class={this.state.noteColor}id="3-12"onClick={this.handleClick} data-value = "D"></div>


                        <div class="fretboard-box fretboard-open"id="4-0"onClick={this.handleClick} data-value = "G">G</div>
                        <div class={this.state.noteColor}id="4-1"onClick={this.handleClick} data-value = "G#/Ab"></div>
                        <div class={this.state.noteColor}id="4-2"onClick={this.handleClick} data-value = "A"></div>
                        <div class={this.state.noteColor}id="4-3"onClick={this.handleClick} data-value = "A#/Bb"></div>
                        <div class={this.state.noteColor}id="4-4"onClick={this.handleClick} data-value = "B"></div>
                        <div class={this.state.noteColor}id="4-5"onClick={this.handleClick} data-value = "C"></div>
                        <div class={this.state.noteColor}id="4-6"onClick={this.handleClick} data-value = "C#/Db"></div>
                        <div class={this.state.noteColor}id="4-7"onClick={this.handleClick} data-value = "D"></div>
                        <div class={this.state.noteColor}id="4-8"onClick={this.handleClick} data-value = "D#/Eb"></div>
                        <div class={this.state.noteColor}id="4-9"onClick={this.handleClick} data-value = "E"></div>
                        <div class={this.state.noteColor}id="4-10"onClick={this.handleClick} data-value = "F"></div>
                        <div class={this.state.noteColor}id="4-11"onClick={this.handleClick} data-value = "F#/Gb"></div>
                        <div class={this.state.noteColor}id="4-12"onClick={this.handleClick} data-value = "G"></div>



                        <div class="fretboard-box fretboard-open"id="5-0"onClick={this.handleClick} data-value = "B">B</div>
                        <div class={this.state.noteColor}id="5-1"onClick={this.handleClick} data-value = "C"></div>
                        <div class={this.state.noteColor}id="5-2"onClick={this.handleClick} data-value = "C#/Db"></div>
                        <div class={this.state.noteColor}id="5-3"onClick={this.handleClick} data-value = "D"></div>
                        <div class={this.state.noteColor}id="5-4"onClick={this.handleClick} data-value = "D#/Eb"></div>
                        <div class={this.state.noteColor}id="5-5"onClick={this.handleClick} data-value = "E"></div>
                        <div class={this.state.noteColor}id="5-6"onClick={this.handleClick} data-value = "F"></div>
                        <div class={this.state.noteColor}id="5-7"onClick={this.handleClick} data-value = "F#/Gb"></div>
                        <div class={this.state.noteColor}id="5-8"onClick={this.handleClick} data-value = "G"></div>
                        <div class={this.state.noteColor}id="5-9"onClick={this.handleClick} data-value = "G#/Ab"></div>
                        <div class={this.state.noteColor}id="5-10"onClick={this.handleClick} data-value = "A"></div>
                        <div class={this.state.noteColor}id="5-11"onClick={this.handleClick} data-value = "A#/Bb"></div>
                        <div class={this.state.noteColor}id="5-12"onClick={this.handleClick} data-value = "B"></div>



                        <div class="fretboard-box fretboard-open"id="6-0"onClick={this.handleClick} data-value = "E">E</div>
                        <div class={this.state.noteColor}id="6-1"onClick={this.handleClick} data-value = "F"></div>
                        <div class={this.state.noteColor}id="6-2"onClick={this.handleClick} data-value = "F#/Gb"></div>
                        <div class={this.state.noteColor}id="6-3"onClick={this.handleClick} data-value = "G"></div>
                        <div class={this.state.noteColor}id="6-4"onClick={this.handleClick} data-value = "G#/Ab"></div>
                        <div class={this.state.noteColor}id="6-5"onClick={this.handleClick} data-value = "A"></div>
                        <div class={this.state.noteColor}id="6-6"onClick={this.handleClick} data-value = "A#/Bb"></div>
                        <div class={this.state.noteColor}id="6-7"onClick={this.handleClick} data-value = "B"></div>
                        <div class={this.state.noteColor}id="6-8"onClick={this.handleClick} data-value = "C"></div>
                        <div class={this.state.noteColor}id="6-9"onClick={this.handleClick} data-value = "C#/Db"></div>
                        <div class={this.state.noteColor}id="6-10"onClick={this.handleClick} data-value = "D"></div>
                        <div class={this.state.noteColor}id="6-11"onClick={this.handleClick} data-value = "D#/Eb"></div>
                        <div class={this.state.noteColor}id="6-12"onClick={this.handleClick} data-value = "E"></div>

    
                    </div>
                </div>
                }
                <button id="1" onClick={this.handleChange}>Show Fretboard</button>
                {this.state.clicked  &&
                <div class="fretboard-wrapper">
                    <div data-value = "E" class="fretboard-box fretboard-open">E</div>
                    <div class={this.state.noteColor}>F</div>
                    <div class={this.state.noteColor}>F#/Gb</div>
                    <div class={this.state.noteColor}>G</div>
                    <div class={this.state.noteColor}>G#/Ab</div>
                    <div class={this.state.noteColor}>A</div>
                    <div class={this.state.noteColor}>A#/Bb</div>
                    <div class={this.state.noteColor}>B</div>
                    <div class={this.state.noteColor}>C</div>
                    <div class={this.state.noteColor}>C#/Db</div>
                    <div class={this.state.noteColor}>D</div>
                    <div class={this.state.noteColor}>D#/Eb</div>
                    <div class={this.state.noteColor}>E</div>



                    <div class="fretboard-box fretboard-open">A</div>
                    <div class={this.state.noteColor}>A#/Bb</div>
                    <div class={this.state.noteColor}>B</div>
                    <div class={this.state.noteColor}>C</div>
                    <div class={this.state.noteColor}>C#/Db</div>
                    <div class={this.state.noteColor}>D</div>
                    <div class={this.state.noteColor}>D#/Eb</div>
                    <div class={this.state.noteColor}>E</div>
                    <div class={this.state.noteColor}>F</div>
                    <div class={this.state.noteColor}>F#/Gb</div>
                    <div class={this.state.noteColor}>G</div>
                    <div class={this.state.noteColor}>G#/Ab</div>
                    <div class={this.state.noteColor}>A</div>



                    <div class="fretboard-box fretboard-open">D</div>
                    <div class={this.state.noteColor}>D#/Eb</div>
                    <div class={this.state.noteColor}>E</div>
                    <div class={this.state.noteColor}>F</div>
                    <div class={this.state.noteColor}>F#/Gb</div>
                    <div class={this.state.noteColor}>G</div>
                    <div class={this.state.noteColor}>G#/Ab</div>
                    <div class={this.state.noteColor}>A</div>
                    <div class={this.state.noteColor}>A#/Bb</div>
                    <div class={this.state.noteColor}>B</div>
                    <div class={this.state.noteColor}>C</div>
                    <div class={this.state.noteColor}>C#/Db</div>
                    <div class={this.state.noteColor}>D</div>


                    <div class="fretboard-box fretboard-open">G</div>
                    <div class={this.state.noteColor}>G#/Ab</div>
                    <div class={this.state.noteColor}>A</div>
                    <div class={this.state.noteColor}>A#/Bb</div>
                    <div class={this.state.noteColor}>B</div>
                    <div class={this.state.noteColor}>C</div>
                    <div class={this.state.noteColor}>C#/Db</div>
                    <div class={this.state.noteColor}>D</div>
                    <div class={this.state.noteColor}>D#/Eb</div>
                    <div class={this.state.noteColor}>E</div>
                    <div class={this.state.noteColor}>F</div>
                    <div class={this.state.noteColor}>F#/Gb</div>
                    <div class={this.state.noteColor}>G</div>




                    <div class="fretboard-box fretboard-open">B</div>
                    <div class={this.state.noteColor}>C</div>
                    <div class={this.state.noteColor}>C#/Db</div>
                    <div class={this.state.noteColor}>D</div>
                    <div class={this.state.noteColor}>D#/Eb</div>
                    <div class={this.state.noteColor}>E</div>
                    <div class={this.state.noteColor}>F</div>
                    <div class={this.state.noteColor}>F#/Gb</div>
                    <div class={this.state.noteColor}>G</div>
                    <div class={this.state.noteColor}>G#/Ab</div>
                    <div class={this.state.noteColor}>A</div>
                    <div class={this.state.noteColor}>A#/Bb</div>
                    <div class={this.state.noteColor}>B</div>



                    <div class="fretboard-box fretboard-open">E</div>
                    <div class={this.state.noteColor}>F</div>
                    <div class={this.state.noteColor}>F#/Gb</div>
                    <div class={this.state.noteColor}>G</div>
                    <div class={this.state.noteColor}>G#/Ab</div>
                    <div class={this.state.noteColor}>A</div>
                    <div class={this.state.noteColor}>A#/Bb</div>
                    <div class={this.state.noteColor}>B</div>
                    <div class={this.state.noteColor}>C</div>
                    <div class={this.state.noteColor}>C#/Db</div>
                    <div class={this.state.noteColor}>D</div>
                    <div class={this.state.noteColor}>D#/Eb</div>
                    <div class={this.state.noteColor}>E</div>


  
                </div>
                }
            </div>
         
        )
    }
}
export default FretBoard



/*        const wrapper ={
            display: "grid",
            gridTemplateColumns:" 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7% 7%",
            gridTemplateRows:" 12% 12% 12% 12% 12% 12% 12%",
            gridGap: "5px",
            backgroundColor:" #fff",
            color: "#444",
          }
          
          const fretboard-box = {
            backgroundColor:" #444",
            color: "#fff",
            borderRadius:" 5px",
            padding: "20px",
            fontSize: "150%",
          }*/