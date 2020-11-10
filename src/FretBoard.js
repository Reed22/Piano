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
                        <FretboardNote note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretboardNote note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretboardNote note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretboardNote note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretboardNote note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretboardNote note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretboardNote note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretboardNote note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretboardNote note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretboardNote note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretboardNote note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>



                        <div class="fretboard-box fretboard-open"id="2-0" onClick={this.handleClick} data-value = "A">A</div>
                        <FretboardNote note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretboardNote note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretboardNote note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretboardNote note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretboardNote note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretboardNote note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretboardNote note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretboardNote note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretboardNote note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretboardNote note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretboardNote note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretboardNote note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
        


                        <div class="fretboard-box fretboard-open"id="3-0"onClick={this.handleClick} data-value = "D">D</div>
                        <FretboardNote note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretboardNote note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretboardNote note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretboardNote note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretboardNote note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretboardNote note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretboardNote note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretboardNote note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretboardNote note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretboardNote note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretboardNote note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretboardNote note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
      




                        <div class="fretboard-box fretboard-open"id="4-0"onClick={this.handleClick} data-value = "G">G</div>
                        <FretboardNote note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretboardNote note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretboardNote note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretboardNote note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretboardNote note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretboardNote note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretboardNote note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretboardNote note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretboardNote note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretboardNote note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretboardNote note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretboardNote note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                  


                        <div class="fretboard-box fretboard-open"id="5-0"onClick={this.handleClick} data-value = "B">B</div>
                        <FretboardNote note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretboardNote note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretboardNote note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretboardNote note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretboardNote note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretboardNote note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretboardNote note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretboardNote note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretboardNote note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretboardNote note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretboardNote note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretboardNote note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
         


                        <div data-value = "E" id="1-0" class="fretboard-box fretboard-open">E</div>
                        <FretboardNote note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretboardNote note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretboardNote note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretboardNote note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretboardNote note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretboardNote note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretboardNote note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretboardNote note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretboardNote note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretboardNote note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretboardNote note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretboardNote note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>


    
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