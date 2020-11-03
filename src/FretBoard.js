import React,  {useState} from 'react'
import {Component} from 'react'
import * as Tone from 'tone'
//import styles from './fret.module.css'

class FretBoard extends Component {
    constructor() {
        super()
        this.state = {
            clicked : false,
            grade : null,
            startQuiz:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(event){
        console.log(event.target.dataset.value)//.dataValue)
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
                    startQuiz: !(prevState.startQuiz)
                }
            })
            //console.log(this.state.clicked)
        }
        /*else{
            if (event.target.id == 2){
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

        }*/

    }
    
  //  playNote(){ } 
    render(){
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
        return(
            <div>
                <button id="1" onClick={this.handleChange}>Show Fretboard</button>
                {this.state.clicked  &&
                <div class="fretboard-wrapper">
                    <div data-value = "E" class="fretboard-box fretboard-open">E</div>
                    <div class="fretboard-box">F</div>
                    <div class="fretboard-box">F#/Gb</div>
                    <div class="fretboard-box">G</div>
                    <div class="fretboard-box">G#/Ab</div>
                    <div class="fretboard-box">A</div>
                    <div class="fretboard-box">A#/Bb</div>
                    <div class="fretboard-box">B</div>
                    <div class="fretboard-box">C</div>
                    <div class="fretboard-box">C#/Db</div>
                    <div class="fretboard-box">D</div>
                    <div class="fretboard-box">D#/Eb</div>
                    <div class="fretboard-box">E</div>



                    <div class="fretboard-box fretboard-open">A</div>
                    <div class="fretboard-box">A#/Bb</div>
                    <div class="fretboard-box">B</div>
                    <div class="fretboard-box">C</div>
                    <div class="fretboard-box">C#/Db</div>
                    <div class="fretboard-box">D</div>
                    <div class="fretboard-box">D#/Eb</div>
                    <div class="fretboard-box">E</div>
                    <div class="fretboard-box">F</div>
                    <div class="fretboard-box">F#/Gb</div>
                    <div class="fretboard-box">G</div>
                    <div class="fretboard-box">G#/Ab</div>
                    <div class="fretboard-box">A</div>



                    <div class="fretboard-box fretboard-open">D</div>
                    <div class="fretboard-box">D#/Eb</div>
                    <div class="fretboard-box">E</div>
                    <div class="fretboard-box">F</div>
                    <div class="fretboard-box">F#/Gb</div>
                    <div class="fretboard-box">G</div>
                    <div class="fretboard-box">G#/Ab</div>
                    <div class="fretboard-box">A</div>
                    <div class="fretboard-box">A#/Bb</div>
                    <div class="fretboard-box">B</div>
                    <div class="fretboard-box">C</div>
                    <div class="fretboard-box">C#/Db</div>
                    <div class="fretboard-box">D</div>


                    <div class="fretboard-box fretboard-open">G</div>
                    <div class="fretboard-box">G#/Ab</div>
                    <div class="fretboard-box">A</div>
                    <div class="fretboard-box">A#/Bb</div>
                    <div class="fretboard-box">B</div>
                    <div class="fretboard-box">C</div>
                    <div class="fretboard-box">C#/Db</div>
                    <div class="fretboard-box">D</div>
                    <div class="fretboard-box">D#/Eb</div>
                    <div class="fretboard-box">E</div>
                    <div class="fretboard-box">F</div>
                    <div class="fretboard-box">F#/Gb</div>
                    <div class="fretboard-box">G</div>




                    <div class="fretboard-box fretboard-open">B</div>
                    <div class="fretboard-box">C</div>
                    <div class="fretboard-box">C#/Db</div>
                    <div class="fretboard-box">D</div>
                    <div class="fretboard-box">D#/Eb</div>
                    <div class="fretboard-box">E</div>
                    <div class="fretboard-box">F</div>
                    <div class="fretboard-box">F#/Gb</div>
                    <div class="fretboard-box">G</div>
                    <div class="fretboard-box">G#/Ab</div>
                    <div class="fretboard-box">A</div>
                    <div class="fretboard-box">A#/Bb</div>
                    <div class="fretboard-box">B</div>



                    <div class="fretboard-box fretboard-open">E</div>
                    <div class="fretboard-box">F</div>
                    <div class="fretboard-box">F#/Gb</div>
                    <div class="fretboard-box">G</div>
                    <div class="fretboard-box">G#/Ab</div>
                    <div class="fretboard-box">A</div>
                    <div class="fretboard-box">A#/Bb</div>
                    <div class="fretboard-box">B</div>
                    <div class="fretboard-box">C</div>
                    <div class="fretboard-box">C#/Db</div>
                    <div class="fretboard-box">D</div>
                    <div class="fretboard-box">D#/Eb</div>
                    <div class="fretboard-box">E</div>


  
                </div>
                }
                <button id="2" onClick={this.handleChange}>Take Fretboard Quiz</button>
                {this.state.startQuiz  &&
                <div className="fretboard-wrapper">
                    <div data-value = "E" class="fretboard-box fretboard-open">E</div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "F"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "F#/Gb"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "G"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "G#/Ab"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "A"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "A#/Bb"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "B"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "C"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "C#/Db"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "D"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "D#/Eb"></div>
                    <div class="fretboard-box" onClick={this.handleClick} data-value = "E"></div>



                    <div class="fretboard-box fretboard-open"onClick={this.handleClick} data-value = "A">A</div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A#/Bb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "B"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C#/Db"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D#/Eb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "E"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F#/Gb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G#/Ab"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A"></div>



                    <div class="fretboard-box fretboard-open"onClick={this.handleClick} data-value = "D">D</div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D#/Eb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "E"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F#/Gb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G#/Ab"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A#/Bb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "B"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C#/Db"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D"></div>


                    <div class="fretboard-box fretboard-open"onClick={this.handleClick} data-value = "G">G</div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G#/Ab"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A#/Bb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "B"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C#/Db"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D#/Eb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "E"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F#/Gb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G"></div>



                    <div class="fretboard-box fretboard-open"onClick={this.handleClick} data-value = "B">B</div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C#/Db"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D#/Eb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "E"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F#/Gb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G#/Ab"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A#/Bb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "B"></div>



                    <div class="fretboard-box fretboard-open"onClick={this.handleClick} data-value = "E">E</div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "F#/Gb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "G#/Ab"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "A#/Bb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "B"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "C#/Db"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "D#/Eb"></div>
                    <div class="fretboard-box"onClick={this.handleClick} data-value = "E"></div>

  
                </div>
                }
            </div>
         
        )
    }
}
export default FretBoard