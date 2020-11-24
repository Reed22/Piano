import React,  {useState} from 'react'
import {Component} from 'react'
import * as Tone from 'tone'
//import styles from './fret.module.css'

class FretboardNote extends Component {
    constructor() {
        super()
        this.state = {
            active : false,
            //displayed : this.props.displayNote
            CmajPent : ["C","D","E","G","A"],
            DmajPent: ["D","E","F#/Gb","A","B"],
            EmajPent :  ["E","F#/Gb","G#/Ab","B","C#/Db"],
            FmajPent : ["F","G","A","C","D"],
            GmajPent : ["G","A","B","D","E"],
            AmajPent : ["A","B","C#/Db","E","F#/Gb"]
        }
        this.handleClick = this.handleClick.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.noteInScale = this.noteInScale.bind(this)

    }
    handleClick(event){
        /*if (this.props.currentNote){      
            this.setState({active : true}
            ,()=>{console.log("props disp and active",this.props.currentNote,this.state.active)})  

        }*/
        this.noteInScale()
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.currentScale != prevProps.currentScale || this.props.currentNote != prevProps.currentNote  ) {
          this.setState({active:false})
        }
      }
      noteInScale(){
        console.log(this.props.note,this.props.currentScale)
        if(this.props.scales == true){
            if (this.props.currentScale == "AmajPent"){
                if (this.state.AmajPent.includes(this.props.note)){
                    console.log("Amaj")
                    this.setState({active:true})}
                else {return false}
            }           
            else if (this.props.currentScale == "CmajPent"){
                if (this.state.CmajPent.includes(this.props.note)){
                    console.log("cmaj")
                    this.setState({active:true})}
                else {return false}
                }  
            else if (this.props.currentScale == "DmajPent"){
                    if (this.state.DmajPent.includes(this.props.note)){
                    console.log("Dmaj")
                    this.setState({active:true})}
                else {return false}
                }  
            else if (this.props.currentScale == "FmajPent"){
                if (this.state.FmajPent.includes(this.props.note)){
                    console.log("Fmaj")
                    this.setState({active:true})}
                else {return false}
            }          
            else if (this.props.currentScale == "GmajPent"){
                if (this.state.GmajPent.includes(this.props.note)){
                    console.log("Gmaj")
                    this.setState({active:true})}
                else {return false}
            }  
            if (this.props.currentScale == "EmajPent"){
                if (this.state.EmajPent.includes(this.props.note)){
                    console.log("Emaj")
                    this.setState({active:true})}
                else {return false}
            } 
        } 
        else {
            if(this.props.currentNote == true){             
                console.log("found me")
                this.setState({active:true})}
            else {return false}
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



