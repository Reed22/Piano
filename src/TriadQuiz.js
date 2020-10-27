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
        this.fillQuestions = this.fillQuestions.bind(this)
        this.handleClick = this.handleClick.bind(this)


    }
    handleClick(event){
        const {name, value, type, checked} = event.target
        /*type === "checkbox" ? this.setState({ [name]: checked }) : */
        console.log(event.target)
        this.setState({ [name]: value })
    
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
        else if (event.target.id == 4){
            this.setState(prevState =>{
                return {
                    seventh: !(prevState.seventh)
                }
            })
        }
    }
    fillQuestions(chords){
        var i
        var answers = []
        for (i = 0; i < 3; i++){
            answers[i] =  chords[Object.keys(chords)[Math.floor(Math.random()*Object.keys(chords).length)]]
        }
        var questionA =  Object.keys( chords)[Math.floor(Math.random()*Object.keys( chords).length)]
        this.setState({question:questionA})
        answers.push( chords[questionA])
        answers = shuffle(answers)
        console.log(answers)
        /*var ansB = prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]],
        var ansC = prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]],
        var  ansD = prevState.chords[Object.keys(prevState.chords)[Math.floor(Math.random()*Object.keys(prevState.chords).length)]]*/
        if (this.state.randomized === true){
            for (i=0;i < answers.length; i++){
                shuffle(answers[i])
            }
        }
        return answers
    }
    generateQuestion(event){
        var answers = []    
        if(this.state.seventh == false){
            answers = this.fillQuestions(this.state.chords)
        }
        else {
            answers = this.fillQuestions(this.state.seventhChords)
        }
        this.setState(prevState =>{ 
            return{
                //question : questionA,
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
                        <button id="4" onClick={this.handleChange}>Seventh Chords</button>
                        <div>Which of the following notes compose {this.state.question}</div>
                        <form>
                        <br />
                            <label>
                                <input 
                                    type="radio" 
                                    name="answer"
                                    value= {this.state.ansA}
                                    checked={this.state.answer === this.state.ansA}
                                    onChange={this.handleClick}
                                />  {this.state.ansA}
                            </label>
                            <br />
                            <label>
                                <input 
                                    type="radio" 
                                    name="answer"
                                    value= {this.state.ansB}
                                    checked={this.state.answer === this.state.ansB}
                                    onChange={this.handleClick}
                                />  {this.state.ansB}
                            </label>
                            <br />
                            <label>
                                <input 
                                    type="radio" 
                                    name="answer"
                                    value= {this.state.ansC}
                                    checked={this.state.answer === this.state.ansC}
                                    onChange={this.handleClick}
                                />  {this.state.ansC}
                            </label>
                            <br/>
                            <label>
                                <input 
                                    type="radio" 
                                    name="answer"
                                    value= {this.state.ansD}
                                    checked={this.state.answer === this.state.ansD}
                                    onChange={this.handleClick}
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