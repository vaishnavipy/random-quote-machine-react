import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare,faTumblrSquare } from '@fortawesome/free-brands-svg-icons'
import './App.css';


function BottomBar(props){
    const color ={color:props.color}

    return(
     <div className="bottomBar" style={color}>

        <span className="social-icon" >
        <a href="https://twitter.com/home" style={color} target="_blank">  <FontAwesomeIcon icon={faTwitterSquare}/> </a>
        </span>

        <span className="social-icon" >
        <a href="https://www.tumblr.com/" style={color}  target="_blank">  <FontAwesomeIcon icon={faTumblrSquare} /> </a>
        </span>

        <span className="btn">
        <button onClick={props.handleClick} style={{backgroundColor:props.color}}>New Quote</button>
        </span>

    </div>
    )

}

export default BottomBar;