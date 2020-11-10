import React,  {useState} from 'react'
import {Component} from 'react'
import * as Tone from 'tone'
//import styles from './fret.module.css'

class FretboardNote extends Component {
    constructor() {
        super()
        this.state = {
            active : false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        console.log("here")  
        if (this.props.currentNote){      
            this.setState({active : true})
        }
    }
     
    render(){

        return(
            <div id= {this.props.id} onClick= {this.handleClick} /*note={this.props.note}*/ class = {this.state.active ? "fretboard-box-green" : "fretboard-box"}>
                <p>{/*this.props.note*/}</p>
            </div>
         
        )
    }
}
export default FretboardNote



