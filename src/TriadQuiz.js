import React,  {useState} from 'react'
import {Component} from 'react'
function     shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
class TriadQuiz extends Component {
    constructor() {
        super()
        this.state = {
            clicked : false,
            question : null,
            ansA : "",
            ansB: "",
            ansC: "",
            ansD: "",
            answer:"",
            seventh: false,
            randomized: false,
            chords : {
                "C major": ["c","e","g"],
                "D minor": ["d","f","a"], 
                "E minor": ["e",'g', 'b'],
                "F major": ['f','a','c'] ,
                "G major": ['g','b','d'],
                "A minor": ['a','c','e'],
                "B diminished" : ['b','d','f']    },
            seventhChords : {
                "C major": ["c","e","g","b"],
                "D minor": ["d","f","a","c"], 
                "E minor": ["e",'g', 'b','d'],
                "F major": ['f','a','c','e'] ,
                "G major": ['g','b','d','f'],
                "A minor": ['a','c','e','g'],
                "B diminished" : ['b','d','f','a']    }
        }
        this.handleChange = this.handleChange.bind(this)
        this.generateQuestion = this.generateQuestion.bind(this)

    }
    handleChange(event) {
        console.log("evt    ",event.target.id,"    pld      ", this.state.played)
        if (event.target.id == 1){
            console.log(this.state.clicked,"\n")
            this.setState(prevState =>{
                return {
                    clicked: !(prevState.clicked)
                }
            })
        }
        else if (event.target.id == 3){
            this.setState(prevState =>{
                return {
                    randomized: !(prevState.randomized)
                }
            })
        }
    }

    generateQuestion(event){
        this.setState(prevState =>{ 
            var answers = []
            var i
            for (i = 0; i < 3; i++){
                answers[i] =  prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]]
            }
            var questionA =  Object.keys( prevState.chords)[Math.floor(Math.random()*Object.keys( prevState.chords).length)]
            answers.push( this.state.chords[questionA])
            answers = shuffle(answers)
            console.log(answers)
            /*var ansB = prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]],
            var ansC = prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]],
            var  ansD = prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]]*/
            if (prevState.randomized === true){
                for (i=0;i < answers.length; i++){
                    shuffle(answers[i])
                }
            }
            return{
                question : questionA,
                ansA : answers[3],
                ansB : answers[0],
                ansC : answers[1],
                ansD : answers[2],
/*
                ansB : prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]],
                ansC : prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]],
                ansD : prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]]*/
            }
        }, ()=> {
            console.log(this.state,"qstion") 
            })          
    }
    render(){

        return(
            <div>
                <button id="1" onClick={this.handleChange}>Triad Quiz</button>
                {
                    this.state.clicked  &&
                    <div>
                        <button id="2" onClick={this.generateQuestion}>Create Question</button>
                        <button id="3" onClick={this.handleChange}>Randomize Note Spelling</button>
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
                            <label>
                                <input 
                                    type="radio" 
                                    name="quiz"
                                    value= {this.state.ansC}
                                    checked={this.state.answer === this.state.ansC}
                                    onChange={this.handleChange}
                                />  {this.state.ansC}
                            </label>
                            <br/>
                            <label>
                                <input 
                                    type="radio" 
                                    name="quiz"
                                    value= {this.state.ansD}
                                    checked={this.state.answer === this.state.ansD}
                                    onChange={this.handleChange}
                                />  {this.state.ansD}
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