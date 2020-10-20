import React,  {useState} from 'react'
import {Component} from 'react'

class TriadQuiz extends Component {
    constructor() {
        super()
        this.state = {
            clicked : false,
            question : null,
            ansA : "",
            ansB: "",
            answer:"",
            chords : {
                "C major": ["c","e","g"],
                "D minor": ["d","f","a"], 
                "E minor": ["e",'g', 'b'],
                "F major": ['f','a','c'] ,
                "G major": ['g','b','d'],
                "A minor": ['a','c','e'],
                "B diminished" : ['b','d','f']    }
        }
        this.handleChange = this.handleChange.bind(this)
        this.generateQuestion = this.generateQuestion.bind(this)

    }
    handleChange(event) {
        console.log("evt    ",event.target.id,"    pld      ", this.state.played)
        if (event.target.id == 1){
            this.setState(prevState =>{
                return {
                    clicked: !(prevState.clicked)
                }
            })
        }
    }
    generateQuestion(event){
        this.setState(prevState =>{ 
            return{
                question : Object.keys( prevState.chords)[Math.floor(Math.random()*Object.keys( prevState.chords).length)]
            }
        }, ()=> {//put prints in callback as set state is async
            console.log(this.state.question,"qstion") 
            })
        //var a = this.state.question    
        this.setState(prevState=>{
            //for (i = 0 ; i<a.length;i++){
            return {ansA : prevState.chords[prevState.question]}    
        }, ()=> {//put prints in callback as set state is async
            console.log(this.state.ansA,"ansA") 
            })
            this.setState(prevState=>{
                return {ansB : prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]]
            }   
        }, ()=> {//put prints in callback as set state is async
            console.log(this.state.ansB,"ansB") 
            })
       
          
    }
    render(){

        return(
            <div>
                <button id="1" onClick={this.handleChange}>Take Triad Quiz</button>
                {
                    this.state.clicked  &&
                    <div>
                        <button id="2" onClick={this.generateQuestion}>Create Question</button>
                        <div>Which of the following notes compose {this.state.question}</div>
                        <form>
                        <br />
                            <label>
                                <input 
                                    type="radio" 
                                    name="quiz"
                                    value= {this.state.ansA}
                                    checked={this.state.answer === this.state.ansA}
                                    onChange={this.handleChange}
                                />  {this.state.ansA}
                            </label>
                            <br />
                            <label>
                                <input 
                                    type="radio" 
                                    name="quiz"
                                    value= {this.state.ansB}
                                    checked={this.state.answer === this.state.ansB}
                                    onChange={this.handleChange}
                                />  {this.state.ansB}
                            </label>
                            <br />
                        </form>
                    </div>
                }
            </div>
        )
    }
}
export default TriadQuiz