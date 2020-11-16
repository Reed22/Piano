import React,  {useState} from 'react'
import {Component} from 'react'
import * as Tone from 'tone'
import FretBoardNote from './FretboardNote'

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
            noteColorFound : "fretboard-box-green",
            displayNote:false

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
        }
        else if (event.target.id == 4){
            this.setState(prevState =>{
                return {
                    displayNote :!prevState.displayNote
                }
            }, ()=> {
                console.log(this.state.displayNote,"qstion") 
            })          
        
        }
    }
     
    render(){

        return(
            <div>

                <button id="2" onClick={this.handleChange}>Start Fretboard Quiz</button>
                {this.state.startQuiz  &&
                <div>
                    <h3 id="3">Click All 6 {this.state.currentNote} Notes on the Fretboard</h3>
                    <h3>Notes Found = {this.state.noteSelectionCount}</h3>                 
                    <button id="4" onClick={this.handleChange}>Display Notes</button>
                    <div className="fretboard-wrapper">
                        <div data-value = "E" id="1-0" class="fretboard-box fretboard-open">E</div>
                        <FretBoardNote displayNote={this.state.displayNote} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>



                        <div class="fretboard-box fretboard-open"id="2-0" onClick={this.handleClick} data-value = "A">A</div>
                        <FretBoardNote displayNote={this.state.displayNote} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
        


                        <div class="fretboard-box fretboard-open"id="3-0"onClick={this.handleClick} data-value = "D">D</div>
                        <FretBoardNote displayNote={this.state.displayNote} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
      




                        <div class="fretboard-box fretboard-open"id="4-0"onClick={this.handleClick} data-value = "G">G</div>
                        <FretBoardNote displayNote={this.state.displayNote} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                  


                        <div class="fretboard-box fretboard-open"id="5-0"onClick={this.handleClick} data-value = "B">B</div>
                        <FretBoardNote displayNote={this.state.displayNote} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
         


                        <div data-value = "E" id="1-0" class="fretboard-box fretboard-open">E</div>
                        <FretBoardNote displayNote={this.state.displayNote} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>


    
                    </div>
                </div>
                }
            </div>
            )
        }
    }
export default FretBoard