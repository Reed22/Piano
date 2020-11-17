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
            scaleQuiz : false,
            noteQuiz : false,
            displayNote:false,
            CmajPent : ["C","D","E","G","A"],
            DmajPent: ["D","E","F#","A","B"],
            EmajPent :  ["E","F#","G#","B","C#"],
            FmajPent : ["F","G","A","C","D"],
            GmajPent : ["G","A","B","D","E"],
            AmajPent : ["A","B","C#","E","F#"]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.createNoteQuiz = this.createNoteQuiz.bind(this)
        this.createScaleQuiz = this.createScaleQuiz.bind(this)

    }
    createNoteQuiz(){
        var noteSelector = ["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G",,"G#/Ab","A","A#/Bb","B"]
        var maximum = 11
        var minimum = 0
        var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        console.log( noteSelector[randomNumber])
        this.setState({currentNote: noteSelector[randomNumber],scaleQuiz:false,arpQuiz:true},()=>{console.log(this.state.currentNote)})
    }
    createScaleQuiz(){
        var noteSelector = ["C","D","E","F","G","A"]
        var maximum = 5
        var minimum = 0
        var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        console.log( noteSelector[randomNumber])
        /*if (noteSelector[randomNumber] == "C"){  scale = CmajPent}
        else if (noteSelector[randomNumber] == "D"){  scale = ["D","E","F#","A","B"]}
        else if (noteSelector[randomNumber] == "E"){  scale = ["E","F#","G#","B","C#"]}
        else if (noteSelector[randomNumber] == "F"){  scale = ["F","G","A","C","D"]}
        else if (noteSelector[randomNumber] == "G"){  scale = ["G","A","B","D","E"]}
        else if (noteSelector[randomNumber] == "F"){  scale = ["A","B","C#","E","F#"]}*/
        
        this.setState({currentNote: noteSelector[randomNumber],scaleQuiz:true,arpQuiz:false },()=>{console.log(this.state.currentNote, this.state.currentScale)})
    
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
        if (event.target.id == 2){
            this.setState(prevState =>{
                return {
                    startQuiz: !(prevState.startQuiz), 
                    currentNote:"",
                    noteSelectionCount:0,
                    noteIds:[]
                }
            },()=>{this.createNoteQuiz()})
        }
        
        else if (event.target.id == 3){
            this.createScaleQuiz()
            /*this.setState(prevState =>{
                return {
                     
                }
            }, ()=> {
                console.log(this.state.displayNote,"qstion") 
            })  */        
        
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

            

                <div>
                    <button id="2" onClick={this.handleChange}>Take Signle Note Quiz</button>
                    <button id="3" onClick={this.handleChange}>Take Penatonic Scale Quiz</button>
                    <h3 >Click All 6 {this.state.currentNote} Notes on the Fretboard</h3>
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
                
            </div>
            )
        }
    }
export default FretBoard