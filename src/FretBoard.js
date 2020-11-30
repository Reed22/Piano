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
            AmajPent : ["A","B","C#","E","F#"],
            isActive1 : false,
            isActive2 : false,
            isActive3 : false,
            isActive4 : false,
            isActive5 : false,
            isActive6 : false,
            isActive7 : false,
            isActive8 : false,
            isActive9 : false,
            isActive10 : false,
            isActive11 : false,
            isActive12 : false,
            isActive13 : false,
            isActive14 : false,
            isActive15 : false,
            isActive16 : false,
            isActive17 : false,
            isActive18 : false,
            isActive19 : false,
            isActive20 : false,
            isActive21 : false,
            isActive22 : false,
            isActive23 : false,
            isActive24 : false,
            isActive25 : false,
            isActive26 : false,
            isActive27 : false,
            isActive28 : false,
            isActive29 : false,
            isActive30 : false,
            isActive31 : false,
            isActive32 : false,
            isActive33 : false,
            isActive34 : false,
            isActive35 : false,
            isActive36 : false,
            isActive37 : false,
            isActive38 : false,
            isActive39 : false,
            isActive40 : false,
            isActive41 : false,
            isActive42 : false,
            isActive43 : false,
            isActive44 : false,
            isActive45 : false,
            isActive46 : false,
            isActive47 : false,
            isActive48 : false,
            isActive49 : false,
            isActive50 : false,
            isActive51 : false,
            isActive52 : false,
            isActive53 : false,            
            isActive54 : false,
            isActive55 : false,
            isActive56 : false,
            isActive57 : false,
            isActive58 : false,
            isActive59 : false,
            isActive60 : false,
            isActive61 : false,
            isActive62 : false,
            isActive63 : false,
            isActive64 : false,
            isActive65 : false,
            isActive66 : false,
            isActive67 : false,
            isActive68 : false,
            isActive69 : false,
            isActive70 : false,
            isActive71 : false,
            isActive72 : false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.createNoteQuiz = this.createNoteQuiz.bind(this)
        this.createScaleQuiz = this.createScaleQuiz.bind(this)
        //this.noteInScale = this.noteInScale.bind(this)

    }
    createNoteQuiz(){
        var noteSelector = ["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G",,"G#/Ab","A","A#/Bb","B"]
        var maximum = 11
        var minimum = 0
        var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        //console.log( noteSelector[randomNumber])
        this.setState({currentNote: noteSelector[randomNumber],scaleQuiz:false,arpQuiz:true},()=>{console.log(this.state.currentNote)})
    }
    createScaleQuiz(){
        var noteSelector = ["C","D","E","F","G","A"]
        var maximum = 5
        var minimum = 0
        var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        console.log( noteSelector[randomNumber])

        if (noteSelector[randomNumber] == "C"){  this.setState({currentScale : "CmajPent"})}
        else if (noteSelector[randomNumber] == "D"){  this.setState({currentScale : "DmajPent"})}
        else if (noteSelector[randomNumber] == "E"){   this.setState({currentScale : "EmajPent"})}
        else if (noteSelector[randomNumber] == "F"){   this.setState({currentScale : "FmajPent"})}
        else if (noteSelector[randomNumber] == "G"){    this.setState({currentScale : "GmajPent"})}
        else if (noteSelector[randomNumber] == "A"){   this.setState({currentScale : "AmajPent"})}
        
        this.setState({currentNote: noteSelector[randomNumber],scaleQuiz:true,arpQuiz:false }/*,()=>{console.log(this.state.currentNote, this.state.currentScale)}*/)
    
    }
    handleClick(event){
        //console.log(event.target.dataset.value)//.dataValue)
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
            }/*, ()=> {
                //console.log(this.state.displayNote,"qstion") 
            }*/)          
        
        }
    }
    noteInScale(note,idNumber){
        console.log(note,this.state.scale)
        if(this.state.scaleQuiz == true){
            if (this.state.scale == "AmajPent"){
                if (this.state.AmajPent.includes(note)){
                    console.log("Amaj")
                    this.setState({[("isActive"+idNumber)]:true})}
            }           
            else if (this.state.scale == "CmajPent"){
                if (this.state.CmajPent.includes(note)){
                    console.log("cmaj")
                    this.setState({[("isActive"+idNumber)]:true})}
                }  
            else if (this.state.scale == "DmajPent"){
                    if (this.state.DmajPent.includes(note)){
                    console.log("Dmaj")
                    this.setState({[("isActive"+idNumber)]:true})}
                }  
            else if (this.state.scale == "FmajPent"){
                if (this.state.FmajPent.includes(note)){
                    console.log("Fmaj")
                    this.setState({[("isActive"+idNumber)]:true})}
            }          
            else if (this.state.scale == "GmajPent"){
                if (this.state.GmajPent.includes(note)){
                    console.log("Gmaj")
                    this.setState({[("isActive"+idNumber)]:true})}
            }  
            if (this.state.scale == "EmajPent"){
                if (this.state.EmajPent.includes(note)){
                    console.log("Emaj")
                    this.setState({[("isActive"+idNumber)]:true})}
             } 
        } 
        else {
            if(this.state.noteQuiz == true){             
                console.log("found me")
                this.setState({active:true})}
            else {return false}
        }

    }

    render(){

        return(
            <div>

            

                <div>
                    <button id="2" onClick={this.handleChange}>Take Signle Note Quiz</button>
                    <button id="3" onClick={this.handleChange}>Take Penatonic Scale Quiz</button>
                    <h3 >Click All {this.state.scaleQuiz ? this.state.currentScale : this.state.currentNote} Notes on the Fretboard</h3>
                    <h3>Notes Found = {this.state.noteSelectionCount}</h3>                 
                    <button id="4" onClick={this.handleChange}>Display Notes</button>
                    <div className="fretboard-wrapper">
                        <div data-value = "E" id="1-0" class="fretboard-box fretboard-open">E</div>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F",1)} isActive = {this.state.isActive1} idNumber = "1" scales =  {this.state.scaleQuiz} note="F" currentNote={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F#/Gb",2)} isActive = {this.state.isActive2} idNumber = "2" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G",3)} isActive = {this.state.isActive3} idNumber = "3" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G#/Ab",4)} isActive = {this.state.isActive4} idNumber = "4" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A",5)} isActive = {this.state.isActive5} idNumber = "5" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A#/Bb",6)} isActive = {this.state.isActive6} idNumber = "6" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("B",7)} isActive = {this.state.isActive7} idNumber = "7" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C",8)} isActive = {this.state.isActive8} idNumber = "8" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C#/Db",9)} isActive = {this.state.isActive9} idNumber = "9" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D",10)} isActive = {this.state.isActive10} idNumber = "10" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D#/Eb",11)} isActive = {this.state.isActive11} idNumber = "11" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("E",12)} isActive = {this.state.isActive12} idNumber = "12" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>



                        <div class="fretboard-box fretboard-open"id="2-0" onClick={this.handleClick} data-value = "A">A</div>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A#/Bb",13)} isActive = {this.state.isActive13} idNumber = "13" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("B",14)} isActive = {this.state.isActive14} idNumber = "14" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C",15)} isActive = {this.state.isActive15} idNumber = "15" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C#/Db",16)} isActive = {this.state.isActive16} idNumber = "16" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D",17)} isActive = {this.state.isActive17} idNumber = "17" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D#/Eb",18)} isActive = {this.state.isActive18} idNumber = "18" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("E",19)} isActive = {this.state.isActive19} idNumber = "19" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F",20)} isActive = {this.state.isActive20} idNumber = "20" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F#/Gb",21)} isActive = {this.state.isActive21} idNumber = "21" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G",22)} isActive = {this.state.isActive22} idNumber = "22" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G#/Ab",23)} isActive = {this.state.isActive23} idNumber = "23" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A",24)} isActive = {this.state.isActive24} idNumber = "24" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
        


                        <div class="fretboard-box fretboard-open"id="3-0"onClick={this.handleClick} data-value = "D">D</div>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D#/Eb",25)} isActive = {this.state.isActive25} idNumber = "25" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("E",26)} isActive = {this.state.isActive26} idNumber = "26" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("F",27)} isActive = {this.state.isActive27} idNumber = "27" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale('F#/Gb',28)} isActive = {this.state.isActive28} idNumber = "28" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G",29)} isActive = {this.state.isActive29} idNumber = "29" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("G#/Ab",30)} isActive = {this.state.isActive30} idNumber = "30" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale('A',31)} isActive = {this.state.isActive31} idNumber = "31" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("A#/Bb",32)} isActive = {this.state.isActive32} idNumber = "32" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("B",33)} isActive = {this.state.isActive33} idNumber = "33" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C",34)} isActive = {this.state.isActive34} idNumber = "34" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("C#/Db",35)} isActive = {this.state.isActive35} idNumber = "35" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale("D",36)} isActive = {this.state.isActive36} idNumber = "36" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
      




                        <div class="fretboard-box fretboard-open"id="4-0"onClick={this.handleClick} data-value = "G">G</div>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive37} idNumber = "37" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive38} idNumber = "38" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive39} idNumber = "39" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive40} idNumber = "40" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive41} idNumber = "41" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive42} idNumber = "42" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive43} idNumber = "43" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive44} idNumber = "44" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive45} idNumber = "45" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive46} idNumber = "46" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive47} idNumber = "47" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive48} idNumber = "48" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                  


                        <div class="fretboard-box fretboard-open"id="5-0"onClick={this.handleClick} data-value = "B">B</div>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive49} idNumber = "49" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive50} idNumber = "50" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive51} idNumber = "51" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive52} idNumber = "52" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive53} idNumber = "53" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive54} idNumber = "54" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive55} idNumber = "55" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive56} idNumber = "56" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive57} idNumber = "57" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive58} idNumber = "58" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive59} idNumber = "59" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive60} idNumber = "60" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
         


                        <div data-value = "E" id="1-0" class="fretboard-box fretboard-open">E</div>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive61} idNumber = "61" scales =  {this.state.scaleQuiz} note="F" currentNote ={this.state.currentNote == "F" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive62} idNumber = "62" scales =  {this.state.scaleQuiz} note="F#/Gb" currentNote ={this.state.currentNote == "F#Gb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive63} idNumber = "63" scales =  {this.state.scaleQuiz} note="G" currentNote ={this.state.currentNote == "G" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive64} idNumber = "64" scales =  {this.state.scaleQuiz} note="G#/Ab" currentNote ={this.state.currentNote == "G#/Ab" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive65} idNumber = "65" scales =  {this.state.scaleQuiz} note="A" currentNote ={this.state.currentNote == "A" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive66} idNumber = "66" scales =  {this.state.scaleQuiz} note="A#/Bb" currentNote ={this.state.currentNote == "A#/Bb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive67} idNumber = "67" scales =  {this.state.scaleQuiz} note="B" currentNote ={this.state.currentNote == "B" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive68} idNumber = "68" scales =  {this.state.scaleQuiz} note="C" currentNote ={this.state.currentNote == "C" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive69} idNumber = "69" scales =  {this.state.scaleQuiz} note="C#/Db" currentNote ={this.state.currentNote == "C#/Db" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive70} idNumber = "70" scales =  {this.state.scaleQuiz} note="D" currentNote ={this.state.currentNote == "D" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive71} idNumber = "71" scales =  {this.state.scaleQuiz} note="D#/Eb" currentNote ={this.state.currentNote == "D#/Eb" ? true : false}/>
                        <FretBoardNote displayNote={this.state.displayNote} currentScale = {this.state.currentScale}  onClick = {() =>this.noteInScale(note,idNumber)} isActive = {this.state.isActive72} idNumber = "72" scales =  {this.state.scaleQuiz} note="E" currentNote ={this.state.currentNote == "E" ? true : false}/>


    
                    </div>
                </div>
                
            </div>
            )
        }
    }
export default FretBoard