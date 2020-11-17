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
            DmajPent: ["D","E","F#","A","B"],
            EmajPent :  ["E","F#","G#","B","C#"],
            FmajPent : ["F","G","A","C","D"],
            GmajPent : ["G","A","B","D","E"],
            AmajPent : ["A","B","C#","E","F#"]
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
        if (this.props.currentNote != prevProps.currentNote) {
          this.setState({active:false})
        }
      }
      noteInScale(){
        //console.log("yyyyyyyyyy",this.props.scales)
        if(this.props.scales == true){
            if (this.props.note == this.state.AmajPent[0]){
                if (this.state.AmajPent.includes(this.props.note)){this.setState({active:true})}
                else {return false}
            }           
            else if (this.props.note == this.state.CmajPent[0]){
                if (this.state.CmajPent.includes(this.props.note)){this.setState({active:true})}
                else {return false}
                }  
            else if (this.props.note == this.state.DmajPent[0]){
                if (this.state.DmajPent.includes(this.props.note)){this.setState({active:true})}
                else {return false}
                }  
            else if (this.props.note == this.state.FmajPent[0]){
                if (this.state.FmajPent.includes(this.props.note)){this.setState({active:true})}
                else {return false}
            }          
            else if (this.props.note == this.state.GmajPent[0]){
                if (this.state.GmajPent.includes(this.props.note)){this.setState({active:true})}
                else {return false}
            }  
            else if (this.props.note == this.state.EmajPent[0]){
                if (this.state.EmajPent.includes(this.props.note)){this.setState({active:true})}
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



