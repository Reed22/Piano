import React,  {useState} from 'react'
import {Component} from 'react'
import * as Tone from 'tone'
//import styles from './fret.module.css'

class FretboardNote extends Component {
    constructor() {
        super()
        this.state = {
            active : false
            //displayed : this.props.displayNote
        }
        this.handleClick = this.handleClick.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)

    }
    handleClick(event){
        if (this.props.currentNote){      
            this.setState({active : true}
            ,()=>{console.log("here",this.state.active)})  

        }
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.currentNote != prevProps.currentNote) {
          this.setState({active:false})
        }
      }
  
    render(){

        return(
            <div id= {this.props.id} onClick= {this.handleClick} /*note={this.props.note}*/ class = {this.state.active ? "fretboard-box-green" : "fretboard-box"}>
                <p>{this.props.displayNote ? this.props.note : " "}</p>
            </div>
         
        )
    }
}
export default FretboardNote



